'use client'

import {Box, Typography} from "@mui/material";
import * as styles from './AddCollectionTab.styles'
import PictureDropzone from "../../../../common/ui/picture-dropzone/PictureDropzone";
import {FC, useState} from "react";
import CustomInput from "../../../../common/ui/custom-input/CustomInput";
import CustomButton from "../../../../common/ui/custom-button/CustomButton";
import {ButtonColor, ButtonSize, ButtonVariant} from "../../../../common/ui/custom-button/types";
import {NewPicture} from "../../../../../types/NewPicture";
import {checkValidCollection} from "./utils/checkValidCollection";
import {User} from "../../../../../types/User";
import {createCollection} from "../../../../../lib/api/api";


interface AddCollectionTabProps {
  userID: number
}

const AddCollectionTab: FC<AddCollectionTabProps> = ({userID}) => {
  const [previewFile, setPreviewFile] = useState<Blob | null>(null);
  const [previewURL, setPreviewURL] = useState('');
  const [collectionParams, setCollectionParams] = useState({
    name: '',
    price: '',
    tags: '',
  })
  const [pictureFile, setPictureFile] = useState<Blob | null>(null);
  const [pictureURL, setPictureURL] = useState('');
  const [pictureLabel, setPictureLabel] = useState<string>('');
  const [collectionPaintings, setcollectionPaintings] = useState<NewPicture[]>([])

  const handleAdd = () => {
    setcollectionPaintings([...collectionPaintings, {
      picture_name: pictureLabel,
      image: pictureFile,
      link: pictureURL,
    }])
    setPictureLabel('');
    setPictureFile(null);
    setPictureURL('');
  }

  const handleCansel = () => {
    setPictureLabel('');
    setPictureFile(null);
    setPictureURL('');
  }

  // const handleDelete = () => {
  //   setPictureLabel('');
  //   setPictureFile(null);
  //   setPictureURL('');
  // }

  const clearForm = () => {
    setPreviewFile(null)
    setPreviewURL('')
    setCollectionParams({
      name: '',
      price: '',
      tags: '',
    })
    setPictureFile(null)
    setPictureURL('')
    setPictureLabel('')
    setcollectionPaintings([])
    handleCansel();
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if(checkValidCollection(collectionParams, previewFile, collectionPaintings)) {
      await createCollection(userID, collectionParams, previewFile, collectionPaintings)
      clearForm()
    }
  }

  return (
    <Box>
      <Box sx={styles.collectionParameters}>
        {previewURL ?
          <Box>
            <img src={previewURL} alt={'collection preview'} style={{width: '100%',height: '320px', borderRadius: '15px'}}/>
          </Box>
          :
          <PictureDropzone
            setFile={setPreviewFile}
            setPictureURL={setPreviewURL}
            sx={styles.previewDropzone}
          />
        }
        <form
          onSubmit={handleSubmit}
          style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', marginTop: '10px'}}
        >
          <Typography sx={styles.formHeader}>Create new collection</Typography>
          <CustomInput
            label={"Label"}
            name={"name"}
            object={collectionParams}
            setObject={setCollectionParams}
          />
          <CustomInput label={"Price"} name={"price"} object={collectionParams} setObject={setCollectionParams}/>
          <CustomInput label={"Tags"} name={"tags"} object={collectionParams} setObject={setCollectionParams}/>
          <CustomButton type='submit' text={"Create collection"} color={ButtonColor.INPUT}/>
        </form>
      </Box>
      <Typography sx={styles.divider}>Add paintings to collection</Typography>
      <Box sx={styles.paintingsContainer}>
        <Box sx={styles.addPaintingContainer}>
          {pictureURL ?
            <Box>
              <img src={pictureURL} alt={'new picture'} style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
              <CustomInput
                label={"Picture label"}
                name={"picture_label"}
                object={pictureLabel}
                setObject={setPictureLabel}
                sx={styles.paintingLabel}
              />
              <Box sx={styles.paintingControls}>
                <CustomButton
                  text={"Cansel"}
                  color={ButtonColor.INPUT}
                  sx={{width: '100%'}}
                  onClick={handleCansel}
                />
                <CustomButton
                  text={"Add"}
                  color={ButtonColor.INPUT}
                  variant={ButtonVariant.CONTAINED}
                  sx={{width: '100%'}}
                  onClick={handleAdd}
                />
              </Box>
            </Box>
            :
            <PictureDropzone
              setFile={setPictureFile}
              setPictureURL={setPictureURL}
              sx={styles.paintingDropzone}
            />
          }
        </Box>
        {collectionPaintings && collectionPaintings.map((painting, index) => (
          <Box key={index} sx={styles.addedPictureContainer}>
            <img src={painting.link} alt={painting.picture_name} style={{width: 'auto', height: '200px',}}/>
            <Box className='overlay' sx={styles.overlay}>
              {/*<Typography sx={styles.addedPictureLabel}>{painting.picture_name}</Typography>*/}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AddCollectionTab
