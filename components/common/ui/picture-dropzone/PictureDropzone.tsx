import {Box, SxProps, Theme, Typography} from "@mui/material";
import Image from "next/image";
import addImageIcon from "../../../../public/icons/add-image.png";
import CustomButton from "../custom-button/CustomButton";
import {ButtonColor, ButtonSize, ButtonVariant} from "../custom-button/types";
import {ChangeEvent, Dispatch, FC, SetStateAction, DragEvent, useRef, useState} from "react";
import {handleFileSelect} from "../../../pages/registration-page/utils/handleFileSelect";

import * as styles from "./PictureDropzone.styles";
import mergeSx from "../../../../lib/utils/MergeSxStylesUtil";

interface PictureDropzoneProps {
  setFile: Dispatch<SetStateAction<File | null>>;
  setPictureURL: Dispatch<SetStateAction<string>>;
  sx?: SxProps<Theme>
}

const PictureDropzone: FC<PictureDropzoneProps> = ({setFile, setPictureURL, sx}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [imageInputError, setImageInputError] = useState('');

  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDropOrFileChange = (
    event: DragEvent | ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    setIsDragging(false);

    const file =
      'dataTransfer' in event
        ? event.dataTransfer.files[0]
        : event.target.files && event.target.files[0];

    if (file) {
      handleFileSelect(file, setImageInputError, setFile, setPictureURL);
    }
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Box>
      <Box
        sx={mergeSx(styles.fileInputContainer, sx)}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={event => event.preventDefault()}
        onDrop={handleDropOrFileChange}
      >
        <Image src={addImageIcon} alt={"add image icon"} style={{width: '15%', height: 'auto', minWidth: '30px'}}/>
        <Typography sx={styles.inputContainerText}>Drag here or...</Typography>
        <CustomButton
          text={'Choose the file'}
          variant={ButtonVariant.CONTAINED}
          size={ButtonSize.SMALL}
          color={ButtonColor.INPUT}
          sx={{mt: '8px'}}
          onClick={openFileInput}
        />
        <input
          ref={fileInputRef}
          accept=".png, .jpg, .jpeg, .webp"
          type="file"
          style={{display: 'none'}}
          onChange={handleDropOrFileChange}
        />
      </Box>
      <Typography sx={styles.imageInputErrorText(imageInputError)}>{imageInputError}</Typography>
    </Box>
  );
};

export default PictureDropzone;
