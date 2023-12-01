import {alpha, SxProps, Theme} from "@mui/material";

export const container: SxProps<Theme> = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '40px 20px',
}

export const collectionBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
}

export const textBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '15px',
}

export const collectionHeader: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontWeight: 400,
  color: '#3b3b3b',
  whiteSpace: 'nowrap',
  textAlign: {
    xs: 'center',
    md: 'left',
  },
  fontSize: {
    xs: 'calc(1.5rem + 1.5vw)',
    lg: '2.5rem',
  },
  mt: {
    xs: '15px',
    md: '0',
  }
}

export const otherText: SxProps<Theme> = {
  fontWeight: 400,
  fontSize: '18px',
  color: '#6e6e6e',
  opacity: 0.85,
  border: '1px solid #b5838d',
  borderRadius: '7px',
  padding: '6px 20px',
  display: 'flex',
  alignItems: 'center',
  width: '100%'
}

export const divider: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontWeight: 400,
  fontSize: {
    xs: 'calc(1.5rem + 1.5vw)',
    lg: '2.5rem',
  },
  color: '#3b3b3b',
  m: '20px 0',
  textAlign: 'center',
  borderBottom: '1px solid #5D2A42'
}

export const paintingsBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '30px',
}

export const paintingContainer: SxProps<Theme> = {
  borderRadius: '10px',
  width: 'auto',
  height: '200px',
  position: 'relative',
  overflow: 'hidden',
  '&:hover .overlay': {
    opacity: 1
  }
}

export const paintingName: SxProps<Theme> = {
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