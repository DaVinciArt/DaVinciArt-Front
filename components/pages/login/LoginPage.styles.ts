import {SxProps, Theme} from "@mui/material";

export const formContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '40px 20px'
}

export const formHeader: SxProps<Theme> = {
  textAlign: 'center',
  fontWeight: 300,
  fontSize: {
    xs: 'calc(1.325rem + 0.9vw)',
    lg: '2rem',
  },
}

export const form: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '25px',
}