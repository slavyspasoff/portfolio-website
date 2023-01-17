import { useContext } from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';

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
    <BackgroundAnimationSection
      text={'skills'}
      id={'skills'}
      sx={{ height: '50vh' }}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexBasis: '55%',
          mx: 'auto',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
        })}
      >
        {skills.map((Skill, idx) => {
          return (
            <Box
              sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
              })}
            >
              <SvgIcon
                sx={(theme) => ({
                  fontSize: 'clamp(3rem,10vw,6rem)',
                  color: theme.palette.text.disabled,
                })}
              >
                <Skill />
              </SvgIcon>
              <Typography
                sx={(theme) => ({
                  fontSize: 'clamp(1.25rem,3.5vw,2rem)',
                  color: theme.palette.text.disabled,
                })}
              >
                {skillText[idx]}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </BackgroundAnimationSection>
  );
}
export default Skills;
