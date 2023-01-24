import { useContext } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './theme';
import { ctx } from './Context';

import Navbar from './components/Navbar';
import Main from './components/main/Main';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import SocialLinks from './components/SocialLinks';

function App() {
  const { mode, setMode } = useContext(ctx);

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline enableColorScheme />
      <Navbar mode={mode} setMode={setMode} />
      <div style={{ height: '3.5rem' }} id='home' /> {/*Navbar offset div */}
      <Main />
      <SocialLinks />
      <About />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
