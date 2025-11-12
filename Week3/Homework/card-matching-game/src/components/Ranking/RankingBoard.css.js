import { style, globalStyle } from '@vanilla-extract/css';

// 전체 컨테이너
export const wrapper = style({
  width: '100%',
  maxWidth: '1300px',
  minHeight: '75vh',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  padding: '20px 30px',
  backgroundColor: '#eaf7fe',
  color: '#1f3c54',
  borderRadius: '20px',
  boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
});

// 헤더
export const boardHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

// 리셋 버튼
export const resetBtn = style({
  backgroundColor: '#ff8c8c',
  color: '#fff',
  border: 'none',
  borderRadius: '999px',
  padding: '8px 14px',
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  selectors: {
    '&:hover': { backgroundColor: '#ff6e6e' },
    '&:active': { transform: 'translateY(1px)' },
  },
});

// 테이블 섹션
export const tableSection = style({
  backgroundColor: '#eaf7fe',
  borderRadius: '16px',
  width: '100%',
});

// 기록이 없을 때 문구
export const empty = style({
  textAlign: 'center',
  fontSize: '1rem',
  color: '#5b6a75',
  padding: '50px 0',
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'center',
  fontSize: '1rem',
});

globalStyle(`${table} thead`, {
  backgroundColor: '#d6edf9',
  fontWeight: 700,
});

globalStyle(`${table} th, ${table} td`, {
  padding: '14px 10px',
  borderBottom: '1px solid #cce6f3',
  color: '#1f3c54',
});

globalStyle(`${table} tbody tr:hover`, {
  backgroundColor: '#eaf6ff',
});
