import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  width: '100%',
  height: '100%',
  fontFamily: 'sans-serif',
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('input, button, textarea, select', {
  fontFamily: 'inherit',
  background: 'none',
  border: 'none',
  outline: 'none',
});

globalStyle('button', {
  cursor: 'pointer',
});
