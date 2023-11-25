'use client';

import {createTheme, FormControl, FormHelperText, InputLabel, OutlinedInput, ThemeProvider} from "@mui/material";
import {FC} from "react";

import * as styles from './CustomInput.styles'

interface CustomInputProps {
  label: string;
  placeholder: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#b5838d',
    },
  },
})

const CustomInput: FC<CustomInputProps> = ({
	label,
	placeholder,
}) => {
	return (
		<ThemeProvider theme={theme}>
      <FormControl sx={{mb: '16px'}}>
        <InputLabel htmlFor={label} sx={styles.inputLabel} size={'normal'}>{label}</InputLabel>
        <OutlinedInput id={label} sx={styles.input} placeholder={placeholder} size={'medium'}/>
        <FormHelperText>Some</FormHelperText>
      </FormControl>
    </ThemeProvider>
	);
};

export default CustomInput
