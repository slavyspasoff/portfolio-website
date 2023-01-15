import { useState, useRef, useEffect } from 'react';
import { Box, Typography, alpha } from '@mui/material';

interface Props {}

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
      sx={{
        my: 50,
        position: 'relative',
      }}
      id='about'
      component='article'
    >
      <Typography
        variant='h2'
        sx={(theme) => ({
          fontSize: '15rem',
          color: alpha(theme.palette.text.secondary, 0.1),
          position: 'absolute',
          fontWeight: theme.typography.fontWeightBold,
          '@keyframes slide': {
            from: {
              opacity: 0,
              filter: 'blur(1rem)',
              transform: 'translate(-25%)',
            },
            to: {
              opacity: 1,
            },
          },
          animation: isIntersection ? `slide 0.75s ease-in` : undefined,
        })}
        ref={textRef}
      >
        ABOUT ME
      </Typography>
      <Box sx={{ width: '80%', maxWidth: '60rem', mx: 'auto', mt: 5 }}>
        <Typography
          component={'p'}
          sx={{ fontFamily: 'Source Sans Pro', fontSize: 18 }}
        >
          I'm Slavy, full stack developer, tech enthusiast and a huge nerd!
          :&#41; Since kid technologies have always peeked my interest and I
          have always enjoyed learning and problem solving. During the years I
          have taught myself several scripting languages, Linux has been my OS
          of choice and I've worked in a hardware shop where I built and
          repaired computers. At the end 2021 of due to the COVID pandemic I
          unfortunately lost my job, so I was presented with the time and
          opportunity to do what I have always dreamed and in the beginning of
          2022 I started my journey in the web development world by enrolling in
          the Digital Carrier Institute's one year Full-Stack Web Development
          bootcamp. There I've met some awesome people who shared the same
          passions as me, we were introduced to technologies such as HTML, CSS,
          JavaScript, React.js, Node.js and we build some awesome projects
          together. Working in a team and being appointed as a class tutor also
          helped me improve my teamwork, communication skills and self
          management. I am currently based in Berlin and looking for a Junior
          Web Developer position where I can apply those skills and be mentored
          towards successful carrier. If I woke your interest please check some
          of my work or feel free to contact me.
        </Typography>
      </Box>
    </Box>
  );
}
export default About;
