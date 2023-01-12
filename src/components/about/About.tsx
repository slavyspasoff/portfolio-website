import { Box, Typography } from '@mui/material';
interface Props {}
function About({}: Props) {
  return (
    <Box
      sx={{
        // minHeight: '150vh',
        mt: 10,
      }}
      id='about'
    >
      <Typography
        variant='h6'
        component={'h2'}
        align='center'
        sx={(theme) => ({
          color: theme.palette.text.secondary,
        })}
      >
        A FEW WORDS ABOUT ME
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
