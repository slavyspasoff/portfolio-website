import { createTheme, darkScrollbar, type PaletteMode } from '@mui/material';
import { grey, amber, cyan } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}

/**
 * colors
 * rgba(33, 33, 33, 1)
 * rgba(241, 43, 94, 1)
 * rgba(194, 47, 91, 1)
 * rgba(242,240,243,1)
 */

export default (theme: PaletteMode) =>
  createTheme({
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    palette: {
      mode: theme,
      background: {
        default: theme === 'dark' ? 'rgb(1,0,29)' : 'rgb(255,251,247)',
      },
      primary: {
        main: theme === 'dark' ? 'rgb(0,255,155)' : cyan['700'],
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
