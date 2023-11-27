import {SxProps, Theme} from "@mui/material";

export const userInformationContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
}

export const avatar: SxProps<Theme> = {
  width: '250px',
  height: '250px',
  mr: '80px',
}

export const textInformation: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px'
}

export const username: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontWeight: 400,
  fontSize: '50px',
  color: '#3b3b3b'
}

export const textBox: SxProps<Theme> = {
  display: 'flex',
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
}

export const collectionsHeader: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontWeight: 400,
  fontSize: '40px',
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