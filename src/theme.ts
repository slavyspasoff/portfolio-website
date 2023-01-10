import { createTheme, darkScrollbar, type PaletteMode } from '@mui/material';
import { amber, pink, grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}

export default (theme: PaletteMode) =>
  createTheme({
    palette: {
      mode: theme,
      background: {
        default: theme === 'dark' ? 'rgb(1,0,29)' : 'rgb(255,251,247)',
      },
      primary: {
        main: theme === 'dark' ? 'rgb(0,255,155)' : 'rgb(255,0,155)',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            ...darkScrollbar(
              theme === 'light'
                ? { track: grey[200], thumb: grey[400], active: grey[400] }
                : undefined
            ),
          },
        },
      },
    },
  });
