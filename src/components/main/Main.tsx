import { Box, Button, Typography } from '@mui/material';

import profilePicture from '../../assets/profile-picture.webp';

interface Props {}

function Main({}: Props) {
  return (
    <Box
      component={'main'}
      sx={(theme) => ({
        mt: '12.5vh',
        minHeight: '80vh',
        p: 2,
        [theme.breakpoints.up('sm')]: {
          height: '50vh',
          display: 'flex',
        },
        '&>*': {
          flexBasis: '100%',
        },
      })}
    >
      <Box sx={{ display: 'grid', placeItems: 'center' }}>
        <img
          src={profilePicture}
          style={{ width: '100%', maxWidth: '27.5rem', objectFit: 'contain' }}
        ></img>
      </Box>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Typography
          component={'h1'}
          variant='h2'
          align='center'
          gutterBottom
          sx={(theme) => ({ fontWeight: theme.typography.fontWeightMedium })}
        >
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
          {/* <a href='#about'>View Projects</a> <span> or </span>
          <a href='#about'>Read About Me</a> */}
        </Box>
      </Box>
    </Box>
  );
}
export default Main;
