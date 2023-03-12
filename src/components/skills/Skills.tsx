import { Box } from '@mui/material'

import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Nodejs,
  Git,
} from '@emotion-icons/boxicons-logos'
import {
  Express,
  Materialui,
  Mongodb,
  Linux,
  Typescript,
} from '@emotion-icons/simple-icons'

import BackgroundAnimationSection from '../BackgroundAnimationSection'
import Skill from './Skill'

interface Props {}

function Skills({}: Props) {
  const skills = [
    { element: Html5, text: 'HTML' },
    { element: Css3, text: 'CSS' },
    { element: Javascript, text: 'JavaScript' },
    { element: Typescript, text: 'TypeScript' },
    { element: ReactLogo, text: 'React' },
    { element: Nodejs, text: 'Nodejs' },
    { element: Mongodb, text: 'Mongodb' },
    { element: Express, text: 'Express' },
    { element: Materialui, text: 'Material UI' },
    { element: Linux, text: 'Linux' },
    { element: Git, text: 'Git' },
  ]

  return (
    <BackgroundAnimationSection text={'skills'} id={'skills'}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexBasis: '80%',
          [theme.breakpoints.up('xl')]: {
            flexBasis: '50%',
          },
          mx: 'auto',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
        })}
      >
        {skills.map(({ element, text }) => {
          return <Skill Icon={element} text={text} key={text} />
        })}
      </Box>
    </BackgroundAnimationSection>
  )
}
export default Skills
