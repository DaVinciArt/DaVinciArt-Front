import {SxProps, Theme} from "@mui/material";

export const card: SxProps<Theme> = {
  border: '1px solid #B5838D',
  borderRadius: '10px',
  overflow: 'hidden',
  mb: '25px'
}

export const cardHeader: SxProps<Theme> = {
  backgroundColor: '#B5838D',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 20px'
}

export const commentatorAvatar: SxProps<Theme> = {
  width: '35px',
  height: '35px',
}

export const authorUsername: SxProps<Theme> = {
  fontWeight: 300,
  fontSize: '18px'
}

export const creationDate: SxProps<Theme> = {
  ml: '15px',
  fontWeight: 300,
  opacity: 0.8,
}

export const reviewBody: SxProps<Theme> = {
  padding: '10px 20px',
  opacity: 0.7,
}