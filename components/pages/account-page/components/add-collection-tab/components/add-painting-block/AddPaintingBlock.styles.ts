import {SxProps, Theme} from "@mui/material";

export const addPaintingContainer: SxProps<Theme> = {
  width: '320px',
  height: 'fit-content',
}

export const paintingLabel: SxProps<Theme> = {
  width: '100%',
  mt: '15px',
}

export const paintingControls: SxProps<Theme> = {
  display: 'flex',
  gap: '15px',
}

export const paintingDropzone: SxProps<Theme> = {
  width: {
    xs: '80%',
    sm: '100%',
  },
  height: {
    xs: '140px',
    sm: '200px',
  },
}