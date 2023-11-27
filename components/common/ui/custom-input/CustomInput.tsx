'use client';

import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography
} from "@mui/material";
import {ChangeEvent, Dispatch, FC, InputHTMLAttributes, SetStateAction, useState} from "react";

import * as styles from './CustomInput.styles'
import {validationMaper} from "./utils/validationMaper";
import {NewUser} from "../../../../types/NewUser";
import Image from "next/image";


interface CustomInputProps {
  label: string;
  name: string;
  type? : string,
  validationFunc?: (value: string) => string[];
  endAdornment?: React.ReactNode;
  object: NewUser | {username: string, password: string};
  setObject?: Dispatch<SetStateAction<NewUser | {username: string, password: string}>>;
}

const CustomInput: FC<CustomInputProps> = ({
	label,
  name,
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

    setObject({...object, [name]: value})
    setErrors(validationMaper[inputName](event.target.value))
  }

	// @ts-ignore
  return (
    <FormControl sx={{mb: '16px'}}>
      <InputLabel htmlFor={label} sx={styles.inputLabel} size={'normal'}>
        {label}
      </InputLabel>
      <OutlinedInput
        sx={styles.input}
        name={name}
        type={type}
        onChange={handleChange}
        endAdornment={endAdornment}
        {...rest}
      />
      {(errors.length > 0) &&
        <Box sx={{color: 'red'}}>
          <Typography component="div">
            Check the entered data for compliance with the following requirements:
          </Typography>
          {errors.map((error, index) => (
            <Typography key={index} sx={{ml: '10px'}} component="div">
              {index + 1}. {error}
            </Typography>
          ))}
        </Box>
      }
    </FormControl>
	);
};

export default CustomInput
