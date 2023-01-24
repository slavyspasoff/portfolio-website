import { type PaletteColor, type PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    // customColor: PaletteColor;
  }
  interface PaletteOptions {
    // customColor: PaletteColorOptions;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    // customColor: true;
  }
}
