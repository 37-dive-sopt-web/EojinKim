import { style } from '@vanilla-extract/css';

// 전체 컨테이너
export const wrapper = style({
  width: '100%',
  maxWidth: '1300px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 320px',
  gap: '28px',
  backgroundColor: '#eaf7fe',
  borderRadius: '20px',
  padding: '24px 28px',
  boxShadow: '0 8px 24px rgba(0,0,0,.06)',
  minHeight: 'calc(100vh - 180px)',
});

// 게임 보드 섹션
export const boardShell = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
});

// 헤더
export const boardHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0 10px',
  marginBottom: '24px',
});

// 카드 그리드 (화면 크기에 따라 카드 비율 자동 조절)
export const grid = style({
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
  width: '100%',
  maxWidth: '680px',
  margin: '0 auto',
  gap: '8px',
  transition: 'all 0.3s ease',

  // 각 레벨별 자동 반응형
  selectors: {
    '&[data-level="1"]': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    '&[data-level="2"]': {
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
    '&[data-level="3"]': {
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
  },
});

// 사이드바 섹션
export const sidebar = style({
  backgroundColor: '#ddf2ff',
  borderRadius: '20px',
  padding: '24px 28px',
  boxShadow: '0 8px 24px rgba(0,0,0,.06)',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
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
