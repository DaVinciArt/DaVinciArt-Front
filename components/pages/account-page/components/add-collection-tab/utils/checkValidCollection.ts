import {NewCollection} from "../../../../../../types/NewCollection";
import {NewPicture} from "../../../../../../types/NewPicture";
import {labelValidator, priceValidator, tagsValidator} from "../../../../../common/ui/custom-input/utils/inputValidators";


export const checkValidCollection = (
  collection: NewCollection,
  collectionPreview: Blob,
  pictures: NewPicture[]
) => {
  let isValid = true;

  if (labelValidator(collection.name).length > 0 || collection.name === '') { isValid = false; }
  if (priceValidator(collection.price).length > 0 || collection.name === '') { isValid = false; }
  if (tagsValidator(collection.tags).length > 0) { isValid = false; }
  if (collectionPreview === null) { isValid = false; }
  if (pictures.length < 1) { isValid = false; }

  return isValid;
}