import {SxProps, Theme} from "@mui/material";

export const cardContainer: SxProps<Theme> = {
  display: 'flex',
  width: '400px',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '15px 20px ',
  borderRadius: '15px',
  boxShadow: '6px 6px 9px #adacac',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)'
  }
}

export const label: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontSize: '35px',
  mt: '10px',
}

export const otherProps: SxProps<Theme> = {
  fontSize: '20px',
  fontWeight: 300,
  opacity: 0.6,
}

export const controlsContainer: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  gap: '10px',
  mt: '10px',
}