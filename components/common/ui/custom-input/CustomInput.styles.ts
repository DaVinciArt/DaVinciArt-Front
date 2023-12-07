import {SxProps, Theme} from "@mui/material";

export const inputLabel: SxProps<Theme> = {
  backgroundColor: 'white',
  padding: '2px 5px 0',
  '&.Mui-focused': {
    padding: '0px 5px 0',
    fontSize: '20px',
  },
};

export const input: SxProps<Theme> = {
  borderRadius: '10px',
  transition: 'all 0.15s ease-in-out',
  input: {
    '&:-webkit-autofill': {
      'WebkitBoxShadow': '0 0 0 30px white inset',
    },
  },
};
