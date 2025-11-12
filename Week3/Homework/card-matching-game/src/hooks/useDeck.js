import { useState } from 'react';
import { buildDeck } from '../utils/buildDeck';

// 현재 카드 덱 상태를 관리하고 새 덱을 생성/초기화하는 커스텀 훅
export default function useDeck() {
  const [deckInfo, setDeckInfo] = useState({
    status: 'idle',
    data: null,
    level: 1,
  });

  // 현재 레벨에 맞는 덱 생성
  const generateDeck = (level = deckInfo.level) => {
    const data = buildDeck(level);
    setDeckInfo({ status: 'ready', data, level });
  };

  // 현재 레벨 기준으로 덱을 재생성
  const resetDeck = () => {
    generateDeck(deckInfo.level);
  };

  return { deckInfo, generateDeck, resetDeck };
}
