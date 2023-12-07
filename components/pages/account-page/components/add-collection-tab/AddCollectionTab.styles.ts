import {alpha, SxProps, Theme} from "@mui/material";

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

export const previewBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}

export const previewBlockText: SxProps<Theme> = {
  fontSize: {
    xs: 'calc(1.275rem + 0.3vw)',
    lg: '1.5rem',
  },
  opacity: 0.7,
  fontWeight: 300,
  mt: '10px'
}

export const previewDropzone: SxProps<Theme> = {
  width: {
    xs: '90%',
    sm: '100%',
  },
  height: {
    xs: '200px',
    sm: '320px',
  },
}

export const formHeader: SxProps<Theme> = {
  fontSize: {
    xs: 'calc(1.5rem + 1.5vw)',
    lg: '2.5rem',
  },
  textAlign: {
    xs: 'center',
    md: 'left',
  },
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

export const paintingsContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  flexWrap: 'wrap',
  padding: '20px 10px'
}

export const popupMessage = (open: boolean): SxProps<Theme> => ({
  position: 'absolute',
  bottom: '40px',
  right: '40px',
  padding: '12px 20px',
  borderRadius: '10px',
  color: 'white',
  zIndex: '1',
  backgroundColor: '#2a9d8f',
  display: open ? 'flex' : 'none',
  fontSize: '20px',
});
