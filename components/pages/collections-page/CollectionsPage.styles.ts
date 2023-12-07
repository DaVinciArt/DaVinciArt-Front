import {SxProps, Theme} from "@mui/material";

export const collectionsContainer: SxProps<Theme> = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  flexWrap: 'wrap',
}

export const collectionCard: SxProps<Theme> = {
  width: '30%'
}