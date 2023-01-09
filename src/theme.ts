import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}

export default createTheme({
  palette: {
    mode: 'dark',
  },
});
