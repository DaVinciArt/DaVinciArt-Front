'use client';

import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput, SxProps, Theme,
  Typography
} from "@mui/material";
import {ChangeEvent, Dispatch, FC, SetStateAction, useState} from "react";

import * as styles from './CustomInput.styles'
import {validationMaper} from "./utils/validationMaper";
import mergeSx from "../../../../lib/utils/MergeSxStylesUtil";


interface CustomInputProps {
  label: string;
  name: string;
  value?: string
  sx?: SxProps<Theme>
  type? : string,
  validationFunc?: (value: string) => string[];
  endAdornment?: React.ReactNode;
  object?: any;
  setObject?: Dispatch<SetStateAction<any>>;
}

const CustomInput: FC<CustomInputProps> = ({
	label,
  name,
  sx,
  value,
  type = 'text',
  validationFunc,
  endAdornment,
  object,
  setObject,
  ...rest
}) => {
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name.toUpperCase();
    const { name, value } = event.target;

    if (typeof object === 'object') {
      setObject({...object, [name]: value})
    } else {
      setObject(value)
    }
    setErrors(validationMaper[inputName](event.target.value))
  }

  return (
    <FormControl sx={mergeSx({mb: '16px'}, sx)}>
      <InputLabel htmlFor={label} sx={styles.inputLabel} size={'normal'}>
        {label}
      </InputLabel>
      <OutlinedInput
        sx={styles.input}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        endAdornment={endAdornment}
        {...rest}
      />
      {(errors.length > 0) &&
        <Box sx={{color: 'red'}}>
          {errors.map((error, index) => (
            <Typography key={index} sx={{ml: '5px'}} component="div">
              {error}
            </Typography>
          ))}
        </Box>
      }
    </FormControl>
	);
};

export default CustomInput
