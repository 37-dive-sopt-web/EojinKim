import React, { useState, useEffect, useCallback } from 'react';
import GameCard from './GameCard';
import GameStatus from './GameStatus';
import ResultModal from './ResultModal';
import * as styles from './GameBoard.css.js';

export default function GameBoard() {
  // 상태 관리
  const [level, setLevel] = useState('1');
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [timeLeft, setTimeLeft] = useState(45);
  const [message, setMessage] = useState('카드를 눌러 게임을 시작');
  const [history, setHistory] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [clearTime, setClearTime] = useState(0);

  // 레벨별 설정
  const getLevelConfig = (lvl) => {
    switch (lvl) {
      case '2':
        return { pairs: 12, time: 60 };
      case '3':
        return { pairs: 18, time: 100 };
      default:
        return { pairs: 8, time: 45 };
    }
  };

  // 게임 초기화
  const resetGame = useCallback(() => {
    const { pairs, time } = getLevelConfig(level);
    const numbers = Array.from({ length: pairs }, (_, i) => i + 1);
    const deck = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((num, index) => ({ id: index, value: num }));

    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setTimeLeft(time);
    setMessage('카드를 눌러 게임을 시작');
    setHistory([]);
    setIsActive(false);
    setShowModal(false);
  }, [level]);

  // 레벨 변경 시 새 게임 시작
  useEffect(() => {
    resetGame();
  }, [resetGame]);

  // 타이머
  useEffect(() => {
    if (!isActive) return;
    if (timeLeft <= 0) {
      setMessage('시간 종료! 패배했습니다.');
      setIsActive(false);
      setIsWin(false);
      setShowModal(true);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 0.01), 10);
    return () => clearTimeout(timer);
  }, [timeLeft, isActive]);

  // 카드 클릭 로직
  const handleFlip = (id) => {
    if (flipped.includes(id)) {
      setMessage('이미 선택한 카드예요!');
      return;
    }
    if (matched.includes(id)) {
      setMessage('이미 맞춘 카드예요!');
      return;
    }
    if (flipped.length === 2) {
      setMessage('두 장까지만 선택할 수 있어요!');
      return;
    }

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);
    if (!isActive) setIsActive(true);

    // 짝 맞추기 검사
    if (newFlipped.length === 2) {
      const [a, b] = newFlipped.map((idx) => cards[idx]);
      const isMatch = a.value === b.value;
      const result = isMatch ? '성공' : '실패';

      // 히스토리 기록 (최대 8개)
      setHistory((prev) => [[a.value, b.value, result], ...prev.slice(0, 7)]);

      if (isMatch) {
        setMatched((prev) => [...prev, a.id, b.id]);
        setMessage('짝을 맞췄어요!');
        setFlipped([]);
      } else {
        setMessage('틀렸어요!');
        setTimeout(() => setFlipped([]), 700);
      }
    }
  };

  // 클리어 시 처리
  useEffect(() => {
    const { pairs, time } = getLevelConfig(level);
    if (matched.length === pairs * 2 && isActive) {
      const clearSeconds = +(time - timeLeft).toFixed(2);
      setClearTime(clearSeconds);
      setIsWin(true);
      setIsActive(false);
      setShowModal(true);

      // localStorage 저장 (레벨 내림차순 / 시간 오름차순)
      const newRecord = {
        level: +level,
        time: clearSeconds,
        date: new Date().toLocaleString('ko-KR'),
      };
      const prev = JSON.parse(localStorage.getItem('gameRecords') || '[]');
      const updated = [...prev, newRecord].sort(
        (a, b) => b.level - a.level || a.time - b.time
      );
      localStorage.setItem('gameRecords', JSON.stringify(updated));
    }
  }, [matched, level, isActive, timeLeft]);

  // 모달 종료 후 게임 리셋 (3초 카운트)
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => resetGame(), 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal, resetGame]);

  // 그리드 크기 설정
  const getGridCols = (lvl) => (lvl === '1' ? 4 : 6);

  const { pairs } = getLevelConfig(level);

  return (
    <div className={styles.wrapper}>
      <div className={styles.boardShell}>
        <div className={styles.boardHeader}>
          <h2>게임 보드</h2>
          <button className={styles.resetBtn} onClick={resetGame}>
            게임 리셋
          </button>
        </div>

        <div
          className={styles.grid}
          style={{ gridTemplateColumns: `repeat(${getGridCols(level)}, 1fr)` }}
        >
          {cards.map((card) => (
            <GameCard
              key={card.id}
              value={card.value}
              isFlipped={flipped.includes(card.id) || matched.includes(card.id)}
              isMatched={matched.includes(card.id)}
              onClick={() => handleFlip(card.id)}
            />
          ))}
        </div>
      </div>

      <div className={styles.sidebar}>
        <GameStatus
          timeLeft={timeLeft}
          matchedPairs={matched.length / 2}
          totalPairs={pairs}
          remainingPairs={pairs - matched.length / 2}
          message={message}
          history={history}
          level={level}
          onLevelChange={setLevel}
        />
      </div>

      {showModal && (
        <ResultModal
          isWin={isWin}
          level={level}
          clearTime={clearTime}
          onClose={resetGame}
        />
      )}
    </div>
  );
}
