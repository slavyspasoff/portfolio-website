import { useMediaQuery } from '@mui/material';

export default () => {
  return useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
};
