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
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          px: 4,
          [theme.breakpoints.up('md')]: {
            px: 12,
          },
          gap: 6,
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
          gitHubLink=''
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
          liveDemoLink=''
          gitHubLink=''
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
          gitHubLink=''
        />
      </Box>
    </BackgroundAnimationSection>
  )
}
export default Projects
