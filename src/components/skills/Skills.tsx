import { useContext } from 'react';
import { Box } from '@mui/material';

import {
  Html5,
  Css3,
  Sass,
  Javascript,
  ReactLogo,
  Nodejs,
  Git,
} from '@emotion-icons/boxicons-logos';
import {
  Express,
  Materialui,
  Mongodb,
  Linux,
} from '@emotion-icons/simple-icons';

import BackgroundAnimationSection from '../BackgroundAnimationSection';
import Skill from './Skill';
import { ctx } from '../../Context';

interface Props {}

function Skills({}: Props) {
  const { mode } = useContext(ctx);

  const skills = [
    Html5,
    Css3,
    Javascript,
    ReactLogo,
    Nodejs,
    Mongodb,
    Express,
    Sass,
    Materialui,
    Linux,
    Git,
  ];
  const skillText = [
    'HTML',
    'CSS',
    'Javascript',
    'React',
    'Nodejs',
    'Mongodb',
    'Express',
    'Sass',
    'Material UI',
    'Linux',
    'Git',
  ];

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
        {skills.map((skill, idx) => {
          return (
            <Skill Icon={skill} text={skillText[idx]} key={skillText[idx]} />
          );
        })}
      </Box>
    </BackgroundAnimationSection>
  );
}
export default Skills;
