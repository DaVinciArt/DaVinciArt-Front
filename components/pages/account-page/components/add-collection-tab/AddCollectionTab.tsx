'use client'

import {Box, Typography} from "@mui/material";
import * as styles from './AddCollectionTab.styles'
import stylesCSS from './AddCollectionTab.module.scss'
import PictureDropzone from "../../../../common/ui/picture-dropzone/PictureDropzone";
import {FC, useState} from "react";
import CustomInput from "../../../../common/ui/custom-input/CustomInput";
import CustomButton from "../../../../common/ui/custom-button/CustomButton";
import {ButtonColor, ButtonVariant} from "../../../../common/ui/custom-button/types";
import {NewPainting} from "../../../../../types/NewPainting";
import {checkValidCollection} from "./utils/checkValidCollection";
import {createCollection} from "../../../../../lib/api/api";
import bin from '../../../../../public/icons/bin.png'
import Image from "next/image";
import {useRouter} from "next/navigation";

interface AddCollectionTabProps {
  userID: number
}

const AddCollectionTab: FC<AddCollectionTabProps> = ({userID}) => {
  const router = useRouter();
  const [previewFile, setPreviewFile] = useState<Blob | null>(null);
  const [previewURL, setPreviewURL] = useState('');
  const [collectionParams, setCollectionParams] = useState({
    name: '',
    price: '',
    tags: '',
  })
  const [paintingFile, setPaintingFile] = useState<Blob | null>(null);
  const [paintingURL, setPaintingURL] = useState('');
  const [paintingLabel, setPaintingLabel] = useState('');
  const [collectionPaintings, setCollectionPaintings] = useState<NewPainting[]>([])
  const [pageErrors, setPageErrors] = useState([])

  const handleAdd = () => {
    setCollectionPaintings([...collectionPaintings, {
      name: paintingLabel,
      image: paintingFile,
      link: paintingURL,
      id: Date.now()
    }])
    handleCansel()
  }

  const handleCansel = () => {
    setPaintingLabel('');
    setPaintingFile(null);
    setPaintingURL('');
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
      router.push('/account')
    } else {
      setPageErrors(errors)
      setTimeout(() => setPageErrors([]), 5000)
    }
  }

  return (
    <Box>
      <Box sx={styles.collectionParameters}>
        {previewURL ?
          <Box sx={styles.previewBlock}>
            <img src={previewURL} alt={'collection preview'} className={stylesCSS['collectionPreview']}/>
            <CustomButton
              text='Change'
              sx={{width: '100%', mt: '10px'}}
              color={ButtonColor.INPUT}
              onClick={handleChangePreview}
            />
          </Box>
          :
          <Box sx={styles.previewBlock}>
            <PictureDropzone
              setFile={setPreviewFile}
              setPictureURL={setPreviewURL}
              sx={styles.previewDropzone}
            />
            <Typography sx={styles.previewBlockText}>Choose preview picture</Typography>
          </Box>
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
              <Typography key={index} sx={{color: 'red'}}> {error}</Typography>
            ))}
          </Box>
        </form>
      </Box>
      <Typography sx={styles.divider}>Add paintings to collection</Typography>
      <Box sx={styles.paintingsContainer}>
        <Box sx={styles.addPaintingContainer}>
          {paintingURL ?
            <Box>
              <img src={paintingURL} alt={'new picture'} className={stylesCSS['newPicture']}/>
              <CustomInput
                label={"NewPainting label"}
                name={"painting_label"}
                object={paintingLabel}
                setObject={setPaintingLabel}
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
              setFile={setPaintingFile}
              setPictureURL={setPaintingURL}
              sx={styles.paintingDropzone}
            />
          }
        </Box>
        {collectionPaintings && collectionPaintings.map((painting, index) => (
          <Box key={index} sx={styles.addedPictureContainer}>
            <img src={painting.link} alt={painting.name} className={stylesCSS['addedPicture']}/>
            <Box className='overlay' sx={styles.overlay}>
              <Typography sx={styles.addedPictureLabel}>{painting.name}</Typography>
              <Image
                src={bin}
                alt={"delete icon"}
                className={stylesCSS['deleteIcon']}
                onClick={() => handleDelete(painting.id)}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AddCollectionTab
