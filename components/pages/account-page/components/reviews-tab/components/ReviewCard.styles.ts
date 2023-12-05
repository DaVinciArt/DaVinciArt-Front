import {SxProps, Theme} from "@mui/material";

export const card: SxProps<Theme> = {
  border: '1px solid #B5838D',
  borderRadius: '10px',
  overflow: 'hidden'
}

export const cardHeader: SxProps<Theme> = {
  backgroundColor: '#B5838D',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 20px'
}

export const authorUsername: SxProps<Theme> = {
  fontWeight: 400
}

export const creationDate: SxProps<Theme> = {
  fontWeight: 300,
  opacity: 0.8,
}

export const reviewBody: SxProps<Theme> = {
  padding: '10px 20px',
  opacity: 0.7,
}