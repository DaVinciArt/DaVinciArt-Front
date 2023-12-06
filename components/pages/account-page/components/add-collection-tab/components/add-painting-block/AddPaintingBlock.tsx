import * as styles from './AddPaintingBlock.styles'
import {Box} from "@mui/material";
import stylesCSS from "../../AddCollectionTab.module.scss";
import CustomInput from "../../../../../../common/ui/custom-input/CustomInput";
import CustomButton from "../../../../../../common/ui/custom-button/CustomButton";
import {ButtonColor, ButtonVariant} from "../../../../../../common/ui/custom-button/types";
import PictureDropzone from "../../../../../../common/ui/picture-dropzone/PictureDropzone";
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {NewPainting} from "../../../../../../../types/NewPainting";
import { Painting } from '../../../../../../../types/Painting';

interface AddPaintingBlockProps {
  collectionPaintings: Painting[],
  setCollectionPaintings: Dispatch<SetStateAction<Painting[]>>,
  isCollectionCreated: boolean,
}

const AddPaintingBlock: FC<AddPaintingBlockProps> =
  ({
     collectionPaintings,
     setCollectionPaintings,
     isCollectionCreated
  }) => {
  const [paintingFile, setPaintingFile] = useState<Blob | null>(null);
  const [paintingURL, setPaintingURL] = useState('');
  const [paintingLabel, setPaintingLabel] = useState('');

  useEffect(() => clearBlock(), [isCollectionCreated])

  const clearBlock = () => {
    setPaintingLabel('');
    setPaintingFile(null);
    setPaintingURL('');
  }

  const handleAdd = () => {
    setCollectionPaintings([...collectionPaintings, {
      id: Date.now(),
      name: paintingLabel,
      image_file: paintingFile,
      image_url: paintingURL,
    }])
    clearBlock()
  }

  return (
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
              onClick={clearBlock}
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
  );
}

export default AddPaintingBlock
