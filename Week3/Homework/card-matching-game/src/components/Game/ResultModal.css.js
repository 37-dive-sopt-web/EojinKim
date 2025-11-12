import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(31, 60, 84, 0.45)',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2000,
});

export const modal = style({
  backgroundColor: '#f2fafc',
  borderRadius: '20px',
  padding: '40px 50px',
  textAlign: 'center',
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  color: '#1f3c54',
  maxWidth: '400px',
  width: '90%',
  animation: 'fadeIn 0.3s ease',
});

// 제목
export const title = style({
  marginBottom: '14px',
  fontSize: '1.3rem',
  fontWeight: 800,
});

// 결과 텍스트
export const text = style({
  fontSize: '1rem',
  margin: '10px 0 14px',
  lineHeight: 1.6,
});

// 안내 문구
export const notice = style({
  color: '#2d9cdb',
  fontWeight: 800,
  fontSize: '1rem',
  marginTop: '10px',
  letterSpacing: '-0.3px',
  opacity: 0.9,
});
