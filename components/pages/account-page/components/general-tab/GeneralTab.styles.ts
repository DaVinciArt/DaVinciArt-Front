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
  width: '250px',
  height: '250px',
  fontSize: '50px',
  m: {
    xs: '0 auto',
    md: ' 0 80px 0 0'
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
    xs: '40px',
    md: '50px',
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
  opacity: 0.7,
  border: '1px solid #b5838d',
  borderRadius: '7px',
  padding: '6px 20px',
  display: 'flex',
  alignItems: 'center',
  width: {
    xs: '100%',
    sm: 'fit-content',
  }
}

export const logOutButton: SxProps<Theme> = {
  width: {
    xs: '100%',
    sm: 'fit-content',
  }
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
  margin: '40px',
}

export const noCollections: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontWeight: 400,
  fontSize: '28px',
  color: '#6e6e6e',
  mt: '10px',
  textAlign: 'center',
}