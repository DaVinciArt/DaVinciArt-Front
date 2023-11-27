export const convertImageToBlob = (file: File) => {
  const blob: Blob = file.slice(0, file.size, file.type);
  return blob;
}