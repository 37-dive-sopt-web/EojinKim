import { style } from '@vanilla-extract/css';

// 카드 기본 스타일
export const card = style({
  width: '100%',
  aspectRatio: '1 / 1',
  perspective: '800px',
  cursor: 'pointer',
  position: 'relative',
  transition: 'transform 0.25s ease',
});

export const flipped = style({});
export const matched = style({});

// 카드 내부 컨테이너
export const inner = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.5s ease',
  borderRadius: '16px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  selectors: {
    // 뒤집힌 상태일 때 회전 적용
    [`${flipped} &`]: { transform: 'rotateY(180deg)' },
  },
});

// 카드 앞/뒤 공통 스타일 베이스
const faceBase = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
  fontWeight: 700,
  backfaceVisibility: 'hidden',
};

// 카드 앞면
export const front = style({
  ...faceBase,
  backgroundColor: '#bee0f4',
  color: '#fff',
});

// 카드 뒷면
export const back = style({
  ...faceBase,
  backgroundColor: '#f2fafc',
  color: '#1f3c54',
  border: '2px solid #bee0f4',
  transform: 'rotateY(180deg)',
});

// 매칭 성공한 카드
export const backMatched = style({
  backgroundColor: '#6abbe8',
  color: '#fff',
  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
  border: 'none',
});
