import { style } from '@vanilla-extract/css';

export const appContainer = style({
  minHeight: '100vh',
  backgroundColor: '#f5fbfe',
});

export const content = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});
