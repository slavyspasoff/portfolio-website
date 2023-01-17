import { useRef } from 'react';
import { Box, Typography, styled, keyframes } from '@mui/material';

import BackgroundAnimationSection from '../BackgroundAnimationSection';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Wrapper = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const textAnimation = keyframes`
  0% {
    transform: translateY(12.5%);
  }
  100% {
    opacity: 1;
  }
`;

interface Props {}

function About({}: Props) {
  //TODO: Mouse IntersectionObserver into custom hook

  const textContainerRef = useRef<HTMLHeadingElement>(null);

  const isIntersecting = useIntersectionObserver(textContainerRef);

  return (
    <BackgroundAnimationSection text={'about me'} id={'about'}>
      <Box
        sx={{
          width: '80%',
          maxWidth: '60rem',
          marginInline: 'auto 12.5%',
          opacity: 0,
          animation: isIntersecting
            ? `${textAnimation} 500ms ease-in forwards`
            : undefined,
        }}
        ref={textContainerRef}
      >
        <Typography
          component={'p'}
          sx={(theme) => ({
            fontSize: 18,
            color: theme.palette.text.secondary,
          })}
        >
          <Box component='span' sx={{ my: '1rem', display: 'block' }}>
            Hello, I'm Slavy! A <Wrapper>Full Stack Developer</Wrapper>, tech
            enthusiast and a huge nerd! <br />
          </Box>
          Since kid technologies have always peeked my interest and I have
          always enjoyed learning and problem solving. During the years I have
          taught myself several scripting languages, Linux has been my OS of
          choice and I've worked in a hardware shop where I built and repaired
          computers. <br />
          At the end 2021 of due to the COVID pandemic I unfortunately lost my
          job, so I was presented with the time and opportunity to do what I
          have always wanted and in the beginning of 2022 I started my journey
          in the web development world by enrolling in the{' '}
          <Wrapper>
            Digital Carrier Institute's one year Full-Stack Web Development
            bootcamp
          </Wrapper>
          . There I've met some awesome people who shared the same passions as
          me, we were introduced to technologies such as HTML, CSS, JavaScript,
          React.js, Node.js and we build some awesome projects together. Working
          in a team and being appointed as a class tutor also helped me improve
          my teamwork, communication skills and self management. <br />I am
          currently based in Berlin and looking for a Junior Web Developer
          position where I can apply those skills and be mentored towards
          successful carrier.
        </Typography>
      </Box>
    </BackgroundAnimationSection>
  );
}
export default About;
