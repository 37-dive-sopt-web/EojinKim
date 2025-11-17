import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body, #root', {
  margin: 0,
  padding: 0,
  width: '100%',
  height: '100%',
  fontFamily: 'sans-serif',
});

globalStyle('*', {
  boxSizing: 'border-box',
});
