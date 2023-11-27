import {SxProps, Theme} from "@mui/material";

export const cardContainer: SxProps<Theme> = {
  display: 'flex',
  width: '400px',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '15px',
  border: '1px solid black',
}

export const label: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontSize: '40px',
}

export const otherProps: SxProps<Theme> = {
  fontSize: '20px',
  fontWeight: 300,
  opacity: 0.6,
}

export const controlsContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
}