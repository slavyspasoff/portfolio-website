import { createTheme, darkScrollbar, type PaletteMode } from '@mui/material';
import { grey, teal, cyan } from '@mui/material/colors';

export default (theme: PaletteMode) =>
  createTheme({
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    palette: {
      mode: theme,
      background: {
        default: theme === 'dark' ? 'rgb(10,25,47)' : 'rgb(255,251,247)',
      },
      primary: {
        main: theme === 'dark' ? teal['A200'] : cyan['700'],
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
