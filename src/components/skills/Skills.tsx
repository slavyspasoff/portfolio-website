import { useContext } from 'react';
import { Box, Typography, SvgIcon, alpha } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import {
  Html5,
  Css3,
  Sass,
  Javascript,
  ReactLogo,
  Nodejs,
  Git,
} from '@emotion-icons/boxicons-logos';
import { Express, Materialui, Mongodb } from '@emotion-icons/simple-icons';

import { ctx } from '../../Context';

interface Props {}

function Skills({}: Props) {
  const { mode } = useContext(ctx);
  const skills = [
    <Html5 title='HTML' />,
    <Css3 title='CSS' />,
    <Javascript title='JavaScript' />,
    <ReactLogo title='React' />,
    <Nodejs title='Node.js' />,
    <Mongodb title='MongoDB' />,
    <Express title='Express' />,
    <Sass title='Sass' />,
    <Materialui title='MaterialUI' />,
    <Git title='Git' />,
  ];

  return (
    <Box sx={(theme) => ({ mt: 10 })} id='skills'>
      <Typography
        align='center'
        component='h2'
        variant='h5'
        sx={(theme) => ({ color: theme.palette.text.secondary })}
      >
        SKILLS
      </Typography>
      {/*TODO:Make a component*/}
      <Box
        sx={(theme) => ({
          mt: 5,
          mb: 50,
          mx: 'auto',
          borderRadius: '1em',
          backgroundColor:
            mode === 'light' ? lightBlue['100'] : lightBlue['900'],
          boxShadow:
            mode === 'light' ? null : `${lightBlue['900']} 0px 0px 100px 1px`,
          // null,
          width: '90%',
          maxWidth: '960px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: 2,
          p: 2,
        })}
      >
        {skills.map((skill) => {
          return (
            <Box sx={{}} key={skill.props.title}>
              <SvgIcon sx={{ display: 'block', mx: 'auto', fontSize: '2rem' }}>
                {skill}
              </SvgIcon>
              <Typography align='center'>{skill.props.title}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
export default Skills;
