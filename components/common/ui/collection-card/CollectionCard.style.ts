import {SxProps, Theme} from "@mui/material";

export const cardContainer: SxProps<Theme> = {
  display: 'flex',
  maxWidth: '400px',
  width: '100%',
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
  fontSize: {
    xs: 'calc(1.325rem + 0.9vw)',
    lg: '2rem',
  },
  mt: '10px',
}

export const otherProps: SxProps<Theme> = {
  fontSize: {
    xs: 'calc(1.15rem + 0.2vw)',
    lg: '1.3rem',
  },
  fontWeight: 300,
  opacity: 0.6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
}

export const viewsBlock: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
}

export const viewsIcon: SxProps<Theme> = {
  width: '25px',
  height: 'auto',
  ml: '6px',
}

export const controlsContainer: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  gap: '10px',
  mt: '10px',
}