import {SxProps, Theme} from "@mui/material/styles";

export const collectionContainer: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  height: 'fit-content',
  flexDirection: 'column',
  alignItems: 'center',
};

export const collectionHeading: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontSize: '40px',
};

export const collectionAuthor: SxProps<Theme> = {
  fontSize: '20px',
  fontWeight: 300,
  opacity: 0.6,
};


