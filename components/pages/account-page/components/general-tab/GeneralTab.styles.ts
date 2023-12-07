import {SxProps, Theme} from "@mui/material";

export const userInformationContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: {
    xs: 'column',
    md: 'row',
  }
}

export const avatar: SxProps<Theme> = {
  width: {
    xs: '150px',
    sm: '250px'
  },
  height: {
    xs: '150px',
    sm: '250px'
  },
  fontSize: '50px',
  m: {
    xs: '0 auto',
    md: '0 80px 0 0'
  }
}

export const textInformation: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
  maxWidth: '420px',

}

export const username: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontWeight: 400,
  color: '#3b3b3b',
  whiteSpace: 'nowrap',
  textAlign: {
    xs: 'center',
    md: 'left',
  },
  fontSize: {
    xs: 'calc(1.9rem + 1.6vw)',
    lg: '2.9rem',
  },
  mt: {
    xs: '15px',
    md: '0',
  }
}

export const textBox: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
}

export const other: SxProps<Theme> = {
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

export const controlButton: SxProps<Theme> = {
  width: '100%'
}

export const userControls: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  gap: '15px'
}

export const collectionsHeader: SxProps<Theme> = {
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

export const collectionsContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '30px',
  marginTop: '30px',
}

export const noCollections: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontWeight: 400,
  fontSize: {
    xs: 'calc(1.325rem + 0.9vw)',
    lg: '2rem',
  },
  color: '#6e6e6e',
  textAlign: 'center',
}