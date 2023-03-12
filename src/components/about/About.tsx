import { useRef } from 'react'
import { Box, Typography, styled, keyframes } from '@mui/material'

import BackgroundAnimationSection from '../BackgroundAnimationSection'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const Wrapper = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const textAnimation = keyframes`
  0% {
    transform: translateY(12.5%);
  }
  100% {
    opacity: 1;
  }
`

interface Props {}

function About({}: Props) {
  //TODO: Mouse IntersectionObserver into custom hook

  const textContainerRef = useRef<HTMLHeadingElement>(null)

  const isIntersecting = useIntersectionObserver(textContainerRef)

  return (
    <BackgroundAnimationSection text={'about me'} id={'about'}>
      <Box
        sx={{
          width: '80%',
          maxWidth: '60rem',
          marginInline: 'auto 12.5%',
          opacity: 0,
          animation: isIntersecting
            ? `${textAnimation} 500ms  200ms ease-in forwards`
            : undefined,
        }}
        ref={textContainerRef}
      >
        <Typography
          component={'h2'}
          sx={(theme) => ({
            fontSize: 18,
            fontWeight: theme.typography.fontWeightRegular,
            color: theme.palette.text.secondary,
          })}
        >
          <Box component='span' sx={{ my: 2, display: 'block' }}>
            Hello, I'm Slavy! A <Wrapper>Full Stack Developer</Wrapper>, tech
            enthusiast and a huge nerd! <br />
          </Box>
          <Box component='span' sx={{ my: 1, display: 'block' }}>
            Since kid technologies have always peeked my interest and I have
            always enjoyed learning and problem solving. During the years I've
            taught myself several scripting languages and Linux has been my OS
            of choice.
          </Box>
          <Box component='span' sx={{ my: 1, display: 'block' }}>
            At the end of 2021, I lost my job due to the pandemic. However, I
            saw this as an opportunity to pursue my dream of becoming a software
            developer. In early 2022, I enrolled in the{' '}
            <Wrapper>Digital Carrier Institute's</Wrapper> one year Full-Stack
            Web Development bootcamp, where I collaborated with a team of
            enthusiastic individuals and learned a variety of technologies,
            including HTML, CSS, JavaScript, React.js, and Node.js. Working in a
            team and being appointed as a class tutor also helped me improve my
            teamwork, communication skills and self management.
          </Box>
          I am currently based in Berlin and looking for a Junior Web Developer
          position where I can apply those skills and be mentored towards
          successful carrier.
        </Typography>
      </Box>
    </BackgroundAnimationSection>
  )
}
export default About
