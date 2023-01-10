import { Box, Button, Typography } from '@mui/material';

import profilePicture from '../../assets/profile-picture.webp';
interface Props {}
function Main({}: Props) {
  return (
    <Box
      component={'main'}
      sx={(theme) => ({
        mt: '5rem',
        // border: '1px solid blue',
        minHeight: '80vh',
        p: 2,
        [theme.breakpoints.up('sm')]: {
          height: '50vh',
          mt: '10rem',
          display: 'flex',
          justifyContent: 'space-evenly',
        },
        '&>*': {
          flexBasis: '100%',
        },
      })}
    >
      <img
        src={profilePicture}
        style={{ width: '100%', objectFit: 'contain' }}
      ></img>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Typography component={'h1'} variant='h2' align='center' gutterBottom>
          Slavy Spasoff
        </Typography>

        <Typography component={'h2'} variant='h4' align='center' gutterBottom>
          Fullstack developer
        </Typography>
        <Box>
          <Button variant='contained' sx={{ mr: 4 }}>
            Download CV
          </Button>
          <Button variant='outlined'>Contact me</Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Main;
