import { style } from '@vanilla-extract/css';

export const headerWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#f2fafc',
  padding: '2rem 2.5rem',
});

export const headerContainer = style({
  width: '100%',
  maxWidth: '1300px',
  backgroundColor: '#e8f7fc',
  padding: '1rem 2rem',
  borderRadius: '1.5rem',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  fontSize: '1.7rem',
  fontWeight: 700,
  color: '#1f3c54',
  letterSpacing: '-0.02em',
  marginLeft: '0.2rem',
});

export const tabGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const tab = style({
  border: 'none',
  borderRadius: '9999px',
  padding: '0.55rem 1.4rem',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  background: '#d5eef7',
  color: '#1f3c54',
  transition: 'all 0.25s ease',
  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  selectors: {
    '&:hover': {
      background: 'linear-gradient(135deg, #c1e4f3 0%, #d0f1f8 100%)',
      transform: 'translateY(-1px)',
      boxShadow: '0 3px 6px rgba(0,0,0,0.08)',
    },
    '&:active': {
      transform: 'scale(0.97)',
      background: 'linear-gradient(135deg, #b7e0f1 0%, #bcecf6 100%)',
    },
  },
});

export const active = style({
  background: 'linear-gradient(135deg, #78c9ef 0%, #70e0f0 100%)',
  color: '#ffffff',
  boxShadow: '0 5px 12px rgba(90, 180, 220, 0.35)',
  transition: 'all 0.25s ease',
  selectors: {
    '&:hover': {
      background: 'linear-gradient(135deg, #6ec1e7 0%, #6adce8 100%)',
      boxShadow: '0 6px 14px rgba(95, 176, 233, 0.45)',
    },
  },
});
