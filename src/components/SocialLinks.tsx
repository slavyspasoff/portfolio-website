import { Box, Typography, keyframes } from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  type SvgIconComponent,
} from '@mui/icons-material';

interface Props {}

const animation = keyframes`
0%{
  transform: translateY(0deg)
}
100%{
  transform: translateY(180deg)
}
`;

const Icon = ({ I }: { I: SvgIconComponent }): JSX.Element => {
  return (
    <I
      sx={(theme) => ({
        fontSize: 22,
        color: theme.palette.text.disabled,
        transition: 'transform 0.3s linear',
        '&:hover': {
          color: theme.palette.primary.main,
          transform: 'rotate(360deg)',
        },
      })}
    />
  );
};

function SocialLinks({}: Props) {
  return (
    <Box
      sx={(theme) => ({
        position: 'fixed',
        bottom: 50,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        zIndex: 1000,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      })}
    >
      <a
        href='https://www.linkedin.com/feed/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <Icon I={LinkedIn} />
      </a>
      <a
        href='https://github.com/slavyspasoff'
        target='_blank'
        rel='noreferrer noopener'
      >
        <Icon I={GitHub} />
      </a>
      <a href='#contact'>
        <Icon I={Email} />
      </a>
      <Box
        sx={(theme) => ({
          height: '5rem',
          width: '1px',
          backgroundColor: theme.palette.text.disabled,
        })}
      />
      <Typography
        sx={(theme) => ({
          transform: 'rotate(90deg)',
          fontSize: 12,
          mt: '2.5rem',
          color: theme.palette.text.disabled,
        })}
      >
        scroll down
      </Typography>
    </Box>
  );
}
export default SocialLinks;
