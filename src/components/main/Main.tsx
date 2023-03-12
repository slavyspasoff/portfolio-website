import { Box, Button, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import profilePicture from '../../assets/profile-picture-color.webp'
interface Props {}

function Main({}: Props) {
  return (
    <Box
      component={'main'}
      sx={(theme) => ({
        mt: '7.5vh',
        minHeight: '80vh',
        p: 2,
        [theme.breakpoints.up('lg')]: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        },
      })}
    >
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <img
          src={profilePicture}
          style={{
            width: '100%',
            maxWidth: '700px',
            objectFit: 'contain',
          }}
        ></img>
      </Box>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          [theme.breakpoints.up('xl')]: {
            pr: 30,
          },
        })}
      >
        <Typography
          component='h1'
          variant='h2'
          gutterBottom
          sx={(theme) => ({
            fontWeight: theme.typography.fontWeightMedium,
            minWidth: '5ch',
          })}
        >
          {' '}
          <TypeAnimation
            sequence={[200, 'Slavy Spasoff']}
            speed={20}
            cursor={false}
            wrapper={'span'}
          />
        </Typography>

        <Typography
          component={'h2'}
          variant='h4'
          gutterBottom
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            minWidth: '5ch',
          })}
        >
          {' '}
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
    </Box>
  )
}
export default Main
