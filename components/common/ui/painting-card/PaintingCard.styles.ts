import {alpha, SxProps, Theme} from "@mui/material";

export const pictureContainer: SxProps<Theme> = {
  borderRadius: '10px',
  width: 'auto',
  height: '200px',
  position: 'relative',
  overflow: 'hidden',
  '&:hover .overlay': {
    opacity: 1
  }
};

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

export const pictureLabel: SxProps<Theme> = {
  fontWeight: 300,
  textAlign: 'center',
  fontSize: '24px',
  fontFamily: 'Cormorant Infant',
}