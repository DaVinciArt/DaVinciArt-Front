import {SxProps, Theme} from "@mui/material";

export const artistCard: SxProps<Theme> = {
  width: {
    xs: '240px',
    sm: '300px',
  },
  height: {
    xs: '432px',
    sm: '540px',
  },
  borderRadius: '7px',
}

export const imageContainer: SxProps<Theme> = {
  width: '100%',
  height: '56%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const textContainer: SxProps<Theme> = {
  textAlign: 'center',
  padding: {
    xs: '10px 10px',
    sm: '15px 10px',
  },
}

export const artistName: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontSize: {
    xs: '24px',
    sm: '30px',
  },
  paddingBottom: {
    xs: '7px',
    sm: '15px',
  },
}

export const arts: SxProps<Theme> = {
  fontFamily: 'Mulish',
  fontSize: {
    xs: '13px',
    sm: '16px',
  }
}

