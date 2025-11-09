import React from 'react';
import {
  statusBox,
  levelSelect,
  timeSection,
  timeItem,
  timeValue,
  cardStatusSection,
  cardItem,
  cardLabel,
  cardValue,
  messageSection,
  message,
  historySection,
  historyList,
  historyItem,
  successText,
  failText,
} from './GameStatus.css.js';

export default function GameStatus({
  timeLeft,
  matchedPairs,
  totalPairs,
  history,
  message: msg,
  level,
  onLevelChange,
}) {
  const remainingPairs = totalPairs - matchedPairs; // 매 render마다 불필요한 연산 방지

  return (
    <div className={statusBox}>
      {/* 레벨 선택 */}
      <select
        className={levelSelect}
        value={level}
        onChange={(e) => onLevelChange(e.target.value)}
      >
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
      </select>

      {/* 남은 시간 & 카드 상태 */}
      <div className={timeSection}>
        <div className={timeItem}>
          <span>남은 시간</span>
          <span className={timeValue}>{timeLeft.toFixed(2)}</span>
        </div>

        <div className={cardStatusSection}>
          <div className={cardItem}>
            <span className={cardLabel}>성공한 짝</span>
            <strong className={cardValue}>
              {matchedPairs}/{totalPairs}
            </strong>
          </div>
          <div className={cardItem}>
            <span className={cardLabel}>남은 짝</span>
            <strong className={cardValue}>{remainingPairs}</strong>
          </div>
        </div>
      </div>

      {/* 안내 메시지 */}
      <div className={messageSection}>
        <h4>안내 메시지</h4>
        <p className={message}>{msg}</p>
      </div>

      {/* 최근 히스토리 */}
      <div className={historySection}>
        <h4>최근 히스토리</h4>
        <ul className={historyList}>
          {history.length === 0 ? (
            <li className={historyItem}>아직 뒤집은 카드가 없어요</li>
          ) : (
            history.map(([a, b, result], idx) => (
              <li key={idx} className={historyItem}>
                <span className={result === '성공' ? successText : failText}>
                  {a}, {b}
                </span>
                <span>{result}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
