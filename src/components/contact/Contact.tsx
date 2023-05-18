import { Box, Typography, styled, alpha } from '@mui/material'

import BackgroundAnimationSection from '../BackgroundAnimationSection'

interface Props {}

const CustomAnchor = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
}))

function Contact({}: Props) {
  return (
    <BackgroundAnimationSection text='Contacts' id='contacts'>
      <Box
        sx={(theme) => ({
          fontSize: 'clamp(0.5rem, 5vw, 2.25rem)',
          color: alpha(theme.palette.text.primary, 0.7),
          textAlign: 'center',
          width: '100%',
        })}
      >
        &#123;
        <br />
        name: Slavy Spasov,
        <br />
        email: slavyspasoff@gmail.com,
        <br />
        title: Full Stack Developer,
        <br />
        <CustomAnchor
          href='https://www.spasoff.de'
          rel='noreferrer noopener'
          target='_blank'
        >
          portfolio: spasoff.de
        </CustomAnchor>
        <br />
        <CustomAnchor
          href='https://www.linkedin.com/in/slavyspasoff/'
          rel='noreferrer noopener'
          target='_blank'
        >
          linkedIn: linkedin.com/in/slavyspasoff
        </CustomAnchor>
        <br />
        <CustomAnchor
          href='https://www.github.com/slavyspasoff/'
          rel='noreferrer noopener'
          target='_blank'
        >
          gitHub: github.com/slavyspasoff
        </CustomAnchor>
        <br />
        &#125;
      </Box>
    </BackgroundAnimationSection>
  )
}
export default Contact
