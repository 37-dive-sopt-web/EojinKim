import { style } from '@vanilla-extract/css';

export const statusBox = style({
  width: '100%',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  color: '#1f3c54',
});

// 레벨 선택 드롭다운
export const levelSelect = style({
  padding: '8px 12px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#eaf7fe',
  fontSize: '1rem',
  fontWeight: 600,
  color: '#1f3c54',
  outline: 'none',
  cursor: 'pointer',
});

// 남은 시간
export const timeSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
});

export const timeItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: '1rem',
  borderBottom: '1px solid #a8d9f3',
  paddingBottom: '6px',
});

export const timeValue = style({
  color: '#2d9cdb',
  fontSize: '1.4rem',
  fontWeight: 800,
});

// 카드 상태
export const cardStatusSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
});

export const cardItem = style({
  flex: 1,
  backgroundColor: '#eaf6ff',
  borderRadius: '12px',
  padding: '12px 0',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 1.4,
});

export const cardLabel = style({
  fontSize: '0.9rem',
  fontWeight: 500,
  color: '#1f3c54',
  marginBottom: '4px',
});

export const cardValue = style({
  fontSize: '1.3rem',
  fontWeight: 800,
  color: '#1f3c54',
});

// 안내 메시지
export const messageSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '4px',
});

export const message = style({
  backgroundColor: '#eaf7fe',
  borderRadius: '10px',
  margin: 0,
  padding: '16px',
  fontSize: '0.95rem',
  lineHeight: 1.5,
  minHeight: '60px',
  display: 'flex',
  alignItems: 'center',
});

// 최근 히스토리
export const historySection = style({
  marginTop: '4px',
});

export const historyList = style({
  listStyle: 'none',
  margin: 0,
  padding: '8px 0 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  maxHeight: '300px',
  overflowY: 'auto',
});

export const historyItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '6px 10px',
  borderRadius: '8px',
  fontSize: '0.9rem',
});

export const successText = style({
  color: '#00a884',
  fontWeight: 700,
});

export const failText = style({
  color: '#e45a5a',
  fontWeight: 700,
});
