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

export const paintingsContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  flexWrap: 'wrap',
  padding: '20px 10px'
}

export const addPaintingContainer: SxProps<Theme> = {
  width: '320px',
  height: 'fit-content',
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

export const paintingControls: SxProps<Theme> = {
  display: 'flex',
  gap: '15px',
}

export const addedPictureContainer: SxProps<Theme> = {
  borderRadius: '10px',
  width: 'auto',
  height: '200px',
  position: 'relative',
  overflow: 'hidden',
  '&:hover .overlay': {
    opacity: 1
  }
};

export const addedPictureLabel: SxProps<Theme> = {
  fontWeight: 300,
  textAlign: 'center',
  fontSize: '24px',
  fontFamily: 'Cormorant Infant',
}

export const overlay: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: alpha('#000000', 0.5),
  color: 'white',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  opacity: 0,
  transition: 'all 0.2s ease-in-out'
}