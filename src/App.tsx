import { useContext, type MouseEventHandler } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './theme';
import { ctx } from './Context';

import Navbar from './components/Navbar';
import Main from './components/main/Main';

function App() {
  const { mode, setMode } = useContext(ctx);

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline enableColorScheme />
      <Navbar mode={mode} setMode={setMode} />
      <Main />
    </ThemeProvider>
  );
}

export default App;
