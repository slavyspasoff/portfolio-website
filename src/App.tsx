import { useContext, type MouseEventHandler } from 'react';
import { Button, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material';
import theme from './theme';
import { ctx } from './Context';

function App() {
  const { mode, setMode } = useContext(ctx);
  const handleModeChange: MouseEventHandler<HTMLButtonElement> = (evt) => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline enableColorScheme />
      <Button
        onClick={handleModeChange}
        variant='text'
        color='warning'
        disableRipple
      >
        {mode === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
      </Button>
    </ThemeProvider>
  );
}

export default App;
