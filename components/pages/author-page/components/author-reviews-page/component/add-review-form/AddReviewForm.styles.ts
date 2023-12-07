import {SxProps, Theme} from "@mui/material";

export const formContainer: SxProps<Theme> = {
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  mb: '20px',
}

export const sendButton: SxProps<Theme> = {
  width: 'auto',
  height: '25px',
  color: '#b5838d'
}

export const errorText: SxProps<Theme> = {
  fontSize: '14px',
  color: 'red',
}