import {Box, Typography} from "@mui/material";
import Image from "next/image";
import addImageIcon from "../../../../public/icons/add-image.png";
import CustomButton from "../../../common/ui/custom-button/CustomButton";
import {ButtonColor, ButtonSize, ButtonVariant} from "../../../common/ui/custom-button/types";
import {ChangeEvent, Dispatch, FC, SetStateAction, useRef, useState} from "react";
import {handleFileSelect} from "../utils/handleFileSelect";

import * as styles from "./AvatarDropzone.styles";

interface AvatarDropzoneProps {
  setFile: Dispatch<SetStateAction<File | null>>;
  setAvatarURL: Dispatch<SetStateAction<string>>;
}

const AvatarDropzone: FC<AvatarDropzoneProps> = ({setFile, setAvatarURL}) => {
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
      handleFileSelect(file, setImageInputError, setFile, setAvatarURL);
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
        sx={styles.fileInputContainer}
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

export default AvatarDropzone;
