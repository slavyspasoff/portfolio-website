import { useState, useRef, useEffect } from 'react';
import { Box, Typography, alpha, styled } from '@mui/material';

interface Props {}

const Wrapper = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

function About({}: Props) {
  //TODO: Mouse IntersectionObserver into custom hook
  const [isIntersection, setIsIntersecting] = useState<boolean>(false);

  const textRef = useRef<HTMLHeadingElement>(null);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    setIsIntersecting(entries[0].isIntersecting);
  };
  const observer = new IntersectionObserver(observerCallback);

  useEffect(() => {
    if (textRef.current) observer.observe(textRef.current);
  });

  return (
    <Box
      sx={(theme) => ({
        minHeight: '100vh',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
          alignItems: 'center',
        },
      })}
      id='about'
      component='article'
    >
      <Typography
        variant='h2'
        sx={(theme) => ({
          [theme.breakpoints.up('sm')]: {
            fontSize: 'clamp(5rem,15vw,15rem)',
            color: alpha(theme.palette.text.secondary, 0.05),
            position: 'absolute',
            top: '50%',
            left: 0,
            fontWeight: theme.typography.fontWeightBold,
            opacity: 0,
            '@keyframes background-slide': {
              from: {
                filter: 'blur(1rem)',
                transform: 'translate(-12.5%)',
              },
              to: {
                opacity: 1,
              },
            },
            animation: isIntersection
              ? `background-slide 750ms 0.5s ease-in forwards`
              : undefined,
          },
          [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            mt: 10,
          },
        })}
        ref={textRef}
      >
        ABOUT ME
      </Typography>
      <Box
        sx={{
          width: '80%',
          maxWidth: '60rem',
          marginInline: 'auto 12.5%',
          opacity: 0,
          '@keyframes slide': {
            from: {
              transform: 'translateY(12.5%)',
            },
            to: {
              opacity: 1,
            },
          },
          animation: isIntersection
            ? `slide 500ms ease-in forwards`
            : undefined,
        }}
      >
        <Typography
          component={'p'}
          sx={(theme) => ({
            fontSize: 18,
            color: theme.palette.text.secondary,
          })}
        >
          <Box sx={{ my: '1rem' }}>
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
    </Box>
  );
}
export default About;
