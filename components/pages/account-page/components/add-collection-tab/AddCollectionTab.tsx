'use client'

import {Box, Typography} from "@mui/material";
import * as styles from './AddCollectionTab.styles'
import PictureDropzone from "../../../../common/ui/picture-dropzone/PictureDropzone";
import {useState} from "react";
import CustomInput from "../../../../common/ui/custom-input/CustomInput";
import CustomButton from "../../../../common/ui/custom-button/CustomButton";
import {ButtonColor, ButtonVariant} from "../../../../common/ui/custom-button/types";
import {NewPicture} from "../../../../../types/NewPicture";



const AddCollectionTab = () => {
  const [previewFile, setPreviewFile] = useState<Blob | null>(null);
  const [previewURL, setPreviewURL] = useState('');
  const [collectionParams, setCollectionParams] = useState({
    label: '',
    price: '',
    pags: '',
  })
  const [pictureFile, setPictureFile] = useState<Blob | null>(null);
  const [pictureURL, setPictureURL] = useState('');
  const [pictureLabel, setPictureLabel] = useState('');
  const [collectionPainting, setcollectionPainting] = useState<NewPicture[]>([])

  return (
    <Box>
      <Box sx={styles.collectionParameters}>
        <PictureDropzone
          setFile={setPreviewFile}
          setPictureURL={setPreviewURL}
          sx={styles.previewDropzone}
        />
        <form style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', marginTop: '10px'}}>
          <Typography sx={styles.formHeader}>Create new collection</Typography>
          <CustomInput
            label={"Label"}
            name={"label"}
            object={collectionParams}
            setObject={setCollectionParams}
          />
          <CustomInput label={"Price"} name={"price"} object={collectionParams} setObject={setCollectionParams}/>
          <CustomInput label={"Tags"} name={"tags"} object={collectionParams} setObject={setCollectionParams}/>
        </form>
      </Box>
      <Typography sx={styles.divider}>Add paintings to collection</Typography>
      <Box>
        <Box sx={styles.addPaintingContainer}>
          <PictureDropzone
            setFile={setPictureFile}
            setPictureURL={setPictureURL}
            sx={styles.paintingDropzone}
          />
          <CustomInput
            label={"Picture label"}
            name={"picture_label"}
            object={pictureLabel}
            setObject={setPictureLabel}
            sx={styles.paintingLabel}
          />
          <CustomButton text={"Add"} color={ButtonColor.INPUT} variant={ButtonVariant.CONTAINED} sx={{width: '100%'}}/>
        </Box>

      </Box>
    </Box>
  );
}

export default AddCollectionTab
