import {SxProps, Theme} from "@mui/material";

export const container: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export const text: SxProps<Theme> = {
  textAlign: 'center',
  fontFamily: 'Cormorant Infant',
  fontSize: {
    xs: 'calc(1.5rem + 1.5vw)',
    lg: '2.5rem',
  },
  mb: '15px',
}

export const waitingpatronContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

