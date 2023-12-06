import {priceValidator, tagsValidator} from "../../../common/ui/custom-input/utils/inputValidators";

export const checkUpdatedValues = (
  collection: {price: string, tags: string},
  status: boolean,
) => {
  let isValid = true;
  let errors = []

  if (status) {
    if (collection.price === ''
      ||
      collection.price === '0'
      ||
      collection.price === '0.0'
    ) { isValid = false; }
    if (!isValid) {
      errors.push('Set price for selling');
      isValid = true;
    }
  }
  if (priceValidator(collection.price).length > 0) { isValid = false; }
  if (!isValid) {
    errors.push('Check your price value');
    isValid = true;
  }

  if (tagsValidator(collection.tags).length > 0) { isValid = false; }
  if (!isValid) {
    errors.push('Check yor tags for accuracy');
  }

  return errors;
}