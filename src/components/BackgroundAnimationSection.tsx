import { useRef, type ReactNode } from 'react';
import {
  Box,
  Typography,
  alpha,
  keyframes,
  type SxProps,
  type Theme,
} from '@mui/material';

interface Props {
  children: ReactNode;
  text: string;
  id?: string;
  sx?: SxProps<Theme>;
}

import useIntersectionObserver from '../hooks/useIntersectionObserver';

const backgroundAnimation = keyframes`
  0% {
      filter:blur(1rem);
      transform: translateX(-12.5%);
    }
  100% {
      opacity: 1;
    }
`;

interface Props {}

function Section({ children, text, id, sx }: Props) {
  const backgroundTextRef = useRef<HTMLHeadingElement>(null);

  const isIntersecting = useIntersectionObserver(backgroundTextRef);
  return (
    <Box
      sx={(theme) => ({
        minHeight: '100vh',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          alignItems: 'center',
        },
      })}
      id={id ? id : ''}
      component='section'
    >
      <Typography
        variant='h2'
        sx={(theme) => ({
          [theme.breakpoints.up('md')]: {
            fontSize: 'clamp(10rem,15vw,15rem)',
            color: alpha(theme.palette.text.secondary, 0.05),
            position: 'absolute',
            top: '50vh',
            left: 0,
            userSelect: 'none',
            fontWeight: theme.typography.fontWeightBold,
            opacity: 0,
            animation: isIntersecting
              ? `${backgroundAnimation} 750ms 0.5s ease-in forwards`
              : undefined,
          },
          [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            mt: 10,
          },
        })}
        ref={backgroundTextRef}
        gutterBottom
      >
        {text.trim().toUpperCase()}
      </Typography>
      {children}
    </Box>
  );
}
export default Section;
