import {Box, Typography} from "@mui/material";
import CustomInput from "../../../../../../common/ui/custom-input/CustomInput";
import {Dispatch, FC, MouseEventHandler, SetStateAction} from "react";

import * as styles from './AddReviewForm.styles'
import {SendRounded} from "@mui/icons-material";

interface AddReviewFormProps {
  review: string;
  setReview: Dispatch<SetStateAction<string>>;
  handleAddReview: MouseEventHandler;
  showError: boolean;
}

const AddReviewForm: FC<AddReviewFormProps> =
  ({
     review,
     setReview,
     handleAddReview,
     showError
  }) => {
  return (
    <Box sx={styles.formContainer}>
      <CustomInput
        label={"Review"}
        name={"review"}
        multiline={true}
        object={review}
        value={review}
        setObject={setReview}
        sx={{width: '100%', mb: '5px'}}
        endAdornment={
        <Box onClick={handleAddReview} sx={{height: '25px'}}>
          <SendRounded sx={styles.sendButton}/>
        </Box>
        }
      />
      {showError &&
        <Typography sx={styles.errorText}>Don't leave input empty</Typography>
      }
    </Box>
  );
}

export default AddReviewForm;
