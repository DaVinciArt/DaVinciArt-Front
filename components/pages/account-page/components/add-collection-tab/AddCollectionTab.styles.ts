import {SxProps, Theme} from "@mui/material";

export const collectionParameters: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '40px',
  flexDirection: {
    xs: 'column',
    md: 'row'
  }
}

export const previewDropzone: SxProps<Theme> = {
  width: '100%',
  height: {
    xs: 'fit-content',
    sm: '320px',
  },
}

export const formHeader: SxProps<Theme> = {
  fontSize: '35px',
  fontFamily: 'Cormorant Infant',
}

export const divider: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontWeight: 400,
  fontSize: {
    xs: 'calc(1.5rem + 1.5vw)',
    lg: '2.5rem',
  },
  color: '#3b3b3b',
  mt: '40px',
  textAlign: 'center',
  borderBottom: '1px solid #5D2A42'
}

export const addPaintingContainer: SxProps<Theme> = {
  width: '320px',
  height: 'fit-content',
  padding: '20px 10px'
}

export const paintingDropzone: SxProps<Theme> = {
  width: '100%',
  height: {
    xs: 'fit-content',
    sm: '200px',
  },
}

export const paintingLabel: SxProps<Theme> = {
  width: '100%',
  mt: '15px',
}