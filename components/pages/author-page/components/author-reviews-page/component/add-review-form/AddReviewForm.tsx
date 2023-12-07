import {Box} from "@mui/material";
import CustomInput from "../../../../../../common/ui/custom-input/CustomInput";
import {Dispatch, FC, SetStateAction} from "react";
import CustomButton from "../../../../../../common/ui/custom-button/CustomButton";

import * as styles from './AddReviewForm.styles'
import {ButtonSize} from "../../../../../../common/ui/custom-button/types";

interface AddReviewFormProps {
  review: string,
  setReview: Dispatch<SetStateAction<string>>,
  setIsReviewAdded: Dispatch<SetStateAction<boolean>>
}

const AddReviewForm: FC<AddReviewFormProps> = ({review, setReview}) => {
  return (
    <Box sx={styles.formContainer}>
      <CustomInput
        label={"Review"}
        name={"review"}
        multiline={true}
        object={review}
        setObject={setReview}
        sx={{width: '100%'}}
      />
      <CustomButton text={"Add review"} size={ButtonSize.SMALL} sx={styles.addButton}/>
    </Box>

  );
}

export default AddReviewForm;
