'use client'

import {Box, Typography} from "@mui/material";
import * as styles from './AddCollectionTab.styles'
import stylesCSS from './AddCollectionTab.module.scss'
import PictureDropzone from "../../../../common/ui/picture-dropzone/PictureDropzone";
import {FC, useState} from "react";
import CustomInput from "../../../../common/ui/custom-input/CustomInput";
import CustomButton from "../../../../common/ui/custom-button/CustomButton";
import {ButtonColor} from "../../../../common/ui/custom-button/types";
import {checkValidCollection} from "./utils/checkValidCollection";
import {createCollection} from "../../../../../lib/api/api";
import {useRouter} from "next/navigation";
import AddPaintingBlock from "./components/add-painting-block/AddPaintingBlock";
import PaintingCard from "../../../../common/ui/painting-card/PaintingCard";
import { Painting } from "../../../../../types/Painting";

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
  const [collectionPaintings, setCollectionPaintings] = useState<Painting[]>([])
  const [pageErrors, setPageErrors] = useState([])
  const [isCollectionCreated, setIsCollectionCreated] = useState<boolean>(false)

  const handleChangePreview = () => {
    setPreviewFile(null);
    setPreviewURL('');
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
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const errors = checkValidCollection(collectionParams, previewFile, collectionPaintings);

    if (errors.length === 0) {
      const response = await createCollection(userID, collectionParams, previewFile, collectionPaintings)
      if (response.status === 200) {
        clearForm()
        setIsCollectionCreated(true)
        setTimeout(() => setIsCollectionCreated(false), 5000)
      }

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
            <img src={previewURL} alt={'collections preview'} className={stylesCSS['collectionPreview']}/>
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
            <CustomButton type='submit' text={"Create collections"} sx={{width: '100%'}}/>
            {pageErrors.length > 0 && pageErrors.map((error, index) => (
              <Typography key={index} sx={{color: 'red'}}> {error}</Typography>
            ))}
          </Box>
        </form>
      </Box>
      <Typography sx={styles.divider}>Add paintings to collection</Typography>
      <Box sx={styles.paintingsContainer}>
        <AddPaintingBlock
          collectionPaintings={collectionPaintings}
          setCollectionPaintings={setCollectionPaintings}
          isCollectionCreated={isCollectionCreated}
        />
        {collectionPaintings && collectionPaintings.map((painting, index) => (
          <Box key={index}>
            <PaintingCard
              painting={painting}
              collectionPaintings={collectionPaintings}
              setCollectionPaintings={setCollectionPaintings}
              isNewPainting={true}
            />
          </Box>
        ))}
      </Box>
      <Typography sx={styles.popupMessage(isCollectionCreated)}>
        Collection created successfully
      </Typography>
    </Box>
  );
}

export default AddCollectionTab
