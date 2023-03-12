import { Box, Typography, SvgIcon, keyframes } from '@mui/material'
import { type ComponentType, useRef } from 'react'

import useIntersectionObserver from '../../hooks/useIntersectionObserver'

interface Props {
  Icon: ComponentType
  text: string
}

const textAnimation = keyframes`
  0% {
    transform: translateY(12.5%);
  }
  100% {
    opacity: 1;
  }
`

function Skill({ Icon, text }: Props) {
  const iconContainerRef = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver(iconContainerRef)

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        opacity: 0,
        color: theme.palette.text.disabled,
        cursor: 'pointer',
        userSelect: 'none',
        animation: isIntersecting
          ? `${textAnimation} 500ms  200ms ease-in forwards`
          : undefined,
        '&:hover': {
          color: theme.palette.primary.main,
        },
      })}
      ref={iconContainerRef}
    >
      <SvgIcon
        sx={(theme) => ({
          fontSize: 'clamp(3rem,10vw,6rem)',
          transform: `scale(${text !== 'TypeScript' ? 1 : 0.75})`,
        })}
        titleAccess={text}
      >
        <Icon />
      </SvgIcon>
      <Typography
        sx={(theme) => ({
          fontSize: 'clamp(1.25rem,3.5vw,1.75rem)',
        })}
      >
        {text}
      </Typography>
    </Box>
  )
}
export default Skill
