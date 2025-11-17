import { createTheme } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
  color: {
    primary: '#4F6CF0',
    danger: '#E54848',
    gray100: '#F5F5F5',
    text: '#111',
  },
  size: {
    radius: '8px',
  },
});
