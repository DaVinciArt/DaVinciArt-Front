import {NewCollection} from "../../../../../../types/NewCollection";
import {NewPainting} from "../../../../../../types/NewPainting";
import {labelValidator, priceValidator, tagsValidator} from "../../../../../common/ui/custom-input/utils/inputValidators";


export const checkValidCollection = (
  collection: NewCollection,
  collectionPreview: Blob,
  paintings: NewPainting[]
) => {
  let isValid = true;
  let errors = []

  if (labelValidator(collection.name).length > 0 || collection.name === '') { isValid = false; }
  if (priceValidator(collection.price).length > 0) { isValid = false; }
  if (tagsValidator(collection.tags).length > 0) { isValid = false; }
  if (!isValid) {
    errors.push('Don\'t leave fields empty');
  }
  if (collectionPreview === null) {
    errors.push('Collection must have a preview');
  }
  if (paintings.length < 1) {
    errors.push('Collection must have at least one painting');
  }

  return errors;
}