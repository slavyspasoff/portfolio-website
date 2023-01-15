import { Box, Button, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import profilePicture from '../../assets/profile-picture.webp';

interface Props {}

function Main({}: Props) {
  return (
    <Box
      component={'main'}
      /*TODO: Calculate the height 100vh - whatever rem the navbar is
      P.S.: Maybe add a "dummy" nav behind the real one instead of margin, will solve most of my problems. Or maybe sticky... need to check the mui docs again... 
      */
      sx={(theme) => ({
        mt: '7.5vh',
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
          [theme.breakpoints.up('sm')]: {
            pl: 20,
          },
          justifyContent: 'center',
        })}
      >
        <Typography
          component={'h1'}
          variant='h2'
          gutterBottom
          sx={(theme) => ({
            fontWeight: theme.typography.fontWeightMedium,
          })}
        >
          <TypeAnimation
            sequence={[200, 'Slavy Spasoff']}
            speed={10}
            cursor={false}
            wrapper={'span'}
          />
        </Typography>

        <Typography component={'h2'} variant='h4' gutterBottom>
          <TypeAnimation
            sequence={[1500, 'Fullstack developer']}
            speed={50}
            wrapper={'span'}
          />
        </Typography>
        <Box>
          <Button variant='contained' sx={{ mr: 4 }}>
            Download CV
          </Button>
          <Button variant='outlined'>Contact me</Button>
        </Box>
      </Box>
      {/*TODO: Add prompt to scroll down */}
    </Box>
  );
}
export default Main;
