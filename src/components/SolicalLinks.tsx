import { Box, Typography } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

interface Props {}

function SolicalLinks({}: Props) {
  return (
    <Box
      sx={(theme) => ({
        position: 'fixed',
        bottom: 50,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
      })}
    >
      <LinkedIn
        sx={(theme) => ({ fontSize: 20, color: theme.palette.text.disabled })}
      />
      <GitHub
        sx={(theme) => ({ fontSize: 20, color: theme.palette.text.disabled })}
      />
      <Email
        sx={(theme) => ({ fontSize: 20, color: theme.palette.text.disabled })}
      />
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
export default SolicalLinks;
