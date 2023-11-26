import {alpha, SxProps, Theme} from "@mui/material";

export const fileInputContainer: SxProps<Theme> = {
  width: '40%',
  height: {
    xs: 'fit-content',
    sm: '180px',
  },
  margin: '0 auto',
  padding: '15px',
  border: '2px dashed #b5838d',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.15s ease-in-out',
  backgroundColor: alpha('#b5838d', 0.07),
  '&:hover': {
    backgroundColor: alpha('#b5838d', 0.2)
  },
};

export const inputContainerText: SxProps<Theme> = {
  fontSize: '16px',
  display: {
    xs: 'none',
    sm: 'flex',
  },
};

export const imageInputErrorText= (imageInputError: string): SxProps<Theme> => ({
  color: 'red',
  width: '40%',
  textAlign: 'center',
  fontSize: '14px',
  margin: '5px auto 0',
  display: imageInputError === '' ? 'none' : 'flex',
});

