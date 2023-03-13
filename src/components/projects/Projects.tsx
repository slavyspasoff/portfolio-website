import { Box } from '@mui/material'
import Project from './Project'
import BackgroundAnimationSection from '../BackgroundAnimationSection'
import {
  Html5,
  Css3,
  Javascript,
  Sass,
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

import PortfolioPic from '../../assets/portfolio.webp'
import WeatherAppPic from '../../assets/weatherapp.webp'
import DevBookPic from '../../assets/devbook.webp'

interface Props {}
function Projects({}: Props) {
  return (
    <BackgroundAnimationSection text='projects' id='projects'>
      <Box
        sx={(theme) => ({
          display: 'grid',
          // flexWrap: 'wrap',
          placeItems: 'center',
          gridTemplateColumns: '1fr',
          width: '100%',
          px: 4,
          gap: 4,
          [theme.breakpoints.up('md')]: {
            px: 12,
            gridTemplateColumns: 'repeat(2,1fr)',
          },
          [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(3,1fr)',
          },
        })}
      >
        <Project
          text={'Portfolio'}
          imgSrc={PortfolioPic}
          imgAlt={'project'}
          technologies={[
            { text: 'TypeScript', Icon: Typescript },
            { text: 'React', Icon: ReactLogo },
            { text: 'MaterialUI', Icon: Materialui },
          ]}
          description={'Personal portfolio website'}
          liveDemoLink='https://www.spasoff.de'
          gitHubLink='https://github.com/slavyspasoff/portfolio-website'
        />
        <Project
          text={'Weather App'}
          imgSrc={WeatherAppPic}
          imgAlt={'project'}
          technologies={[
            { text: 'TypeScript', Icon: Typescript },
            { text: 'React', Icon: ReactLogo },
            { text: 'MaterialUI', Icon: Materialui },
          ]}
          description={'Weather app working with the OpenWeatherAPI'}
          liveDemoLink='https://weatherapp-b8e3.onrender.com'
          gitHubLink='https://github.com/slavyspasoff/weatherapp'
        />
        <Project
          text={'DevBook'}
          imgSrc={DevBookPic}
          imgAlt={'project'}
          technologies={[
            { text: 'TypeScript', Icon: Typescript },
            { text: 'React', Icon: ReactLogo },
            { text: 'Sass', Icon: Sass },
            { text: 'Node.js', Icon: Nodejs },
            { text: 'Express', Icon: Express },
            { text: 'Mongodb', Icon: Mongodb },
          ]}
          description={
            'Social media for developers created as a final project for DCI in collaboration with Denis McArdle, Nigel Nix, Sunny Eyles, Iwo Kaczmarzyk'
          }
          liveDemoLink='https://www.devbook.live'
          gitHubLink='https://github.com/slavyspasoff/DevBookBackend'
        />
      </Box>
    </BackgroundAnimationSection>
  )
}
export default Projects
