'use client'

import {Box, Typography} from "@mui/material";
import * as styles from './AddCollectionTab.styles'
import stylesCSS from './AddCollectionTab.module.scss'
import PictureDropzone from "../../../../common/ui/picture-dropzone/PictureDropzone";
import {FC, useState} from "react";
import CustomInput from "../../../../common/ui/custom-input/CustomInput";
import CustomButton from "../../../../common/ui/custom-button/CustomButton";
import {ButtonColor, ButtonVariant} from "../../../../common/ui/custom-button/types";
import {NewPicture} from "../../../../../types/NewPicture";
import {checkValidCollection} from "./utils/checkValidCollection";
import {createCollection} from "../../../../../lib/api/api";
import bin from '../../../../../public/icons/bin.png'
import Image from "next/image";

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
  const [pictureLabel, setPictureLabel] = useState('');
  const [collectionPaintings, setCollectionPaintings] = useState<NewPicture[]>([])
  const [pageErrors, setPageErrors] = useState([])

  const handleAdd = () => {
    setCollectionPaintings([...collectionPaintings, {
      picture_name: pictureLabel,
      image: pictureFile,
      link: pictureURL,
      id: Date.now()
    }])
    handleCansel()
  }

  const handleCansel = () => {
    setPictureLabel('');
    setPictureFile(null);
    setPictureURL('');
  }

  const handleChangePreview = () => {
    setPreviewFile(null);
    setPreviewURL('');
  }

  const handleDelete = (id: number) => {
    setCollectionPaintings(collectionPaintings.filter((picture) => picture.id !== id))
  }

  const clearForm = () => {
    setPreviewFile(null)
    setPreviewURL('')
    setCollectionParams({
      name: '',
      price: '',
      tags: '',
    })
    setCollectionPaintings([])
    handleCansel();
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const errors = checkValidCollection(collectionParams, previewFile, collectionPaintings);

    if(errors.length === 0) {
      await createCollection(userID, collectionParams, previewFile, collectionPaintings)
      clearForm()
    } else {
      setPageErrors(errors)
      setTimeout(() => setPageErrors([]), 5000)
    }
  }

  return (
    <Box>
      <Box sx={styles.collectionParameters}>
        {previewURL ?
          <Box>
            <img src={previewURL} alt={'collection preview'} className={stylesCSS['collectionPreview']}/>
            <CustomButton
              text='Change'
              sx={{width: '100%', mt: '10px'}}
              color={ButtonColor.INPUT}
              onClick={handleChangePreview}
            />
          </Box>
          :
          <PictureDropzone
            setFile={setPreviewFile}
            setPictureURL={setPreviewURL}
            sx={styles.previewDropzone}
          />
        }
        <form onSubmit={handleSubmit} className={stylesCSS['form']}>
          <Typography sx={styles.formHeader}>Create new collection</Typography>
          <CustomInput
            label={"Label"}
            name={"name"}
            object={collectionParams}
            setObject={setCollectionParams}
            value={collectionParams.name}
          />
          <CustomInput
            label={"Price"}
            name={"price"}
            object={collectionParams}
            setObject={setCollectionParams}
            value={collectionParams.price}
          />
          <CustomInput
            label={"Tags"}
            object={collectionParams}
            setObject={setCollectionParams}
            name={"tags"}
            value={collectionParams.tags}
          />
          <Box>
            <CustomButton type='submit' text={"Create collection"} sx={{width: '100%'}}/>
            {pageErrors.length > 0 && pageErrors.map((error, index) => (
              <Typography key={index} sx={{color: 'red'}}> - {error}</Typography>
            ))}
          </Box>
        </form>
      </Box>
      <Typography sx={styles.divider}>Add paintings to collection</Typography>
      <Box sx={styles.paintingsContainer}>
        <Box sx={styles.addPaintingContainer}>
          {pictureURL ?
            <Box>
              <img src={pictureURL} alt={'new picture'} className={stylesCSS['newPicture']}/>
              <CustomInput
                label={"Picture label"}
                name={"picture_label"}
                object={pictureLabel}
                setObject={setPictureLabel}
                sx={styles.paintingLabel}
              />
              <Box sx={styles.paintingControls}>
                <CustomButton
                  text={"Cancel"}
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
            <img src={painting.link} alt={painting.picture_name} className={stylesCSS['addedPicture']}/>
            <Box className='overlay' sx={styles.overlay}>
              <Typography sx={styles.addedPictureLabel}>{painting.picture_name}</Typography>
              <Image
                src={bin}
                alt={"delete icon"}
                className={stylesCSS['deleteIcon']}
                onClick={() => handleDelete(painting.id)}/>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AddCollectionTab
