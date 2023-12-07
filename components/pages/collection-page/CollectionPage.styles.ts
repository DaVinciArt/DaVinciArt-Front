import {alpha, SxProps, Theme} from "@mui/material";

export const container: SxProps<Theme> = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '40px 20px',
}

export const collectionBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '40px',
}

export const textBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '10px',
  width: {
    xs: '70%',
    md: '350px'
  },
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
  borderRadius: '10px',
  padding: '12px 20px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  mb: '8px'
}

export const statusToggle: SxProps<Theme> = {
  width: '100%',
  mb: '16px'
}

export const statusToggleButton: SxProps<Theme> = {
  width: '50%',
  padding: '6px 11px'
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

