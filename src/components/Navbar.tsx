import {
  useState,
  type MouseEventHandler,
  type Dispatch,
  type SetStateAction,
} from 'react';
import {
  Button,
  AppBar,
  Drawer,
  Box,
  Typography,
  IconButton,
  styled,
  useScrollTrigger,
  type PaletteMode,
  type SxProps,
} from '@mui/material';
import { LightModeOutlined, DarkModeOutlined, Menu } from '@mui/icons-material';

interface Props {
  mode: PaletteMode;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}
// TODO: Move to styles maybe
const NavItem = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.primary.main,
  textTransform: 'capitalize',
}));

function Navbar({ mode, setMode }: Props) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const navItems = ['home', 'about', 'project', 'contact'];

  //TODO: Move to own component
  const renderNavItems = (sx: SxProps) => (
    <Box
      sx={{
        justifyContent: 'end',
        alignItems: 'center',
        gap: 4,
        px: 4,
        py: 1,
        ...sx,
      }}
    >
      {navItems.map((item) => (
        <NavItem
          href={`#${item}`}
          key={item}
          onClick={() => setMobileOpen(false)}
        >
          {item}
        </NavItem>
      ))}
    </Box>
  );

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleModeChange: MouseEventHandler<HTMLButtonElement> = (evt) => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppBar
      component='nav'
      enableColorOnDark
      elevation={trigger ? 4 : 0}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        gap: 4,
        px: 4,
        py: 1,
      })}
    >
      <Box component='nav'>
        <Drawer
          container={null}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          elevation={0}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={(theme) => ({
            display: {
              xs: 'block',
              sm: 'none',
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '80%',
              backgroundColor: theme.palette.background.default,
            },
          })}
        >
          {renderNavItems({
            display: { xs: 'flex', sm: 'none' },
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          })}
        </Drawer>
      </Box>

      {renderNavItems({
        display: { xs: 'none', sm: 'flex' },
      })}
      <IconButton
        onClick={handleModeChange}
        disableRipple
        size='small'
        color='warning'
      >
        {mode === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
      </IconButton>
      <IconButton
        disableRipple
        size='small'
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
        onClick={handleDrawerToggle}
      >
        <Menu />
      </IconButton>
    </AppBar>
  );
}
export default Navbar;
