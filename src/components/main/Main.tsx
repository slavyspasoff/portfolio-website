import { Box, Button, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import profilePicture from '../../assets/profile-picture-color.webp'
import cvFile from '../../assets/cv-slavy-spasoff.pdf'

interface Props {}

function Main({}: Props) {
  return (
    <Box
      component={'main'}
      sx={(theme) => ({
        minHeight: '80vh',
        p: 2,
        [theme.breakpoints.up('lg')]: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'grid',
          placeItems: 'center',
          [theme.breakpoints.up('xl')]: {
            pl: 10,
          },
        })}
      >
        <img
          src={profilePicture}
          style={{
            width: '100%',
            maxWidth: '770px',
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
            pr: 35,
            pt: 10,
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
            fontSize: '4.15rem',
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
            fontSize: '2.35rem',
            // mb: 2,
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
          <a
            href={cvFile}
            rel='noreferrer noopener'
            download
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button
              variant='contained'
              sx={{ mr: 4.5, fontSize: '0.975rem', py: 0.55 }}
            >
              Download CV
            </Button>
          </a>
          <a
            href='#contacts'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button variant='outlined' sx={{ fontSize: '0.975rem', py: 0.55 }}>
              Contact me
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  )
}
export default Main
