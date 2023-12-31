import { Dispatch, SetStateAction } from "react";
import { isValidFile } from "./isValidFile";
import {convertImageToBlob} from "../../../../lib/utils/convertImageToBlob";

export const handleFileSelect = (
  file: File,
  setImageInputError: Dispatch<SetStateAction<string>>,
  setFile: Dispatch<SetStateAction<Blob | null>>,
  setAvatarURL: Dispatch<SetStateAction<string>>,
) => {
  if (!isValidFile(file)) {
    setImageInputError(
      'Invalid file extension. Supported file extensions: .png, .jpg, .jpeg, .webp'
    );
    return;
  }

  if (file.size > 1.5 * 1024 * 1024) {
    setImageInputError('Розмір файлу не повинен бути більше 1.5 МБ');
    return;
  }

  const reader = new FileReader();
  reader.onload = (event: ProgressEvent<FileReader>) => {
    if (event.target) {
      const result = event.target.result;
      if (typeof result === 'string') {
        setAvatarURL(result);
      }
    }
  };
  reader.readAsDataURL(file);
  setFile(convertImageToBlob(file));
};