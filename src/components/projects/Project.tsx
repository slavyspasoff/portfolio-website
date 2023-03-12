import { ComponentType } from 'react'
import {
  alpha,
  Box,
  Typography,
  Button,
  IconButton,
  SvgIcon,
} from '@mui/material'
import { Language, GitHub } from '@mui/icons-material'
import { blueGrey } from '@mui/material/colors'

interface Technology {
  text: string
  Icon: ComponentType
}

interface Props {
  text: string
  imgSrc: string
  imgAlt: string
  technologies: Technology[]
  description: string
  liveDemoLink?: string
  gitHubLink?: string
}
function Project({
  text,
  imgSrc,
  imgAlt,
  technologies,
  description,
  liveDemoLink,
  gitHubLink,
}: Props) {
  return (
    <Box
      sx={(theme) => ({
        p: 4,
        maxWidth: '360px',
        borderRadius: 2,
        boxShadow: `0px 5px 20px 5px ${
          theme.palette.mode === 'light' ? blueGrey[200] : blueGrey[900]
        }`,
        backgroundColor: alpha(
          theme.palette.mode === 'light' ? blueGrey[200] : blueGrey['A700'],
          0.5
        ),
        textAlign: 'center',
        display: 'grid',
        gridTemplateRows: '3rem 12.5rem 6rem 9rem 2rem',
      })}
    >
      <Typography variant={'h5'} sx={{ mb: 4 }} fontWeight={500}>
        {text}
      </Typography>
      <img
        loading='lazy'
        src={imgSrc}
        style={{ width: '100%', objectFit: 'cover', aspectRatio: '1.8/1' }}
        alt={imgAlt}
      />
      <Box>
        <Typography paragraph sx={{ fontSize: '1.15rem' }}>
          Technologies:
        </Typography>
        {technologies.map((e) => (
          <SvgIcon
            key={e.text}
            titleAccess={e.text}
            sx={(theme) => ({
              color: theme.palette.text.secondary,
              mx: 1,
              transform: `scale(${e.text !== 'TypeScript' ? 1 : 0.85})`,
              cursor: 'pointer',
              '&:hover': {
                color: theme.palette.primary.main,
              },
            })}
          >
            <e.Icon />
          </SvgIcon>
        ))}
      </Box>
      <Box>
        <Typography paragraph sx={{ fontSize: '1.15rem' }}>
          Description:
        </Typography>
        <Typography
          variant='body2'
          sx={(theme) => ({ color: theme.palette.text.secondary })}
        >
          {description}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button startIcon={<Language />} variant='text'>
          <a
            href={liveDemoLink}
            style={{ textDecoration: 'none', color: 'inherit' }}
            target='_blank'
          >
            Demo
          </a>
        </Button>
        <Button startIcon={<GitHub />} variant='text'>
          Code
        </Button>
      </Box>
    </Box>
  )
}
export default Project
