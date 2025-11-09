import React, { useEffect, useState } from 'react';
import * as styles from './RankingBoard.css.js';

export default function RankingBoard() {
  const [records, setRecords] = useState([]);

  // localStorage에서 기록 불러오기
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('gameRecords') || '[]');
    const sorted = saved.sort((a, b) => {
      if (a.level !== b.level) return Number(b.level) - Number(a.level);
      return parseFloat(a.time) - parseFloat(b.time);
    });
    setRecords(sorted);
  }, []);

  // 기록 초기화
  const handleReset = () => {
    localStorage.removeItem('gameRecords');
    setRecords([]);
  };

  return (
    <div className={styles.wrapper}>
      {/* 헤더 */}
      <div className={styles.boardHeader}>
        <h2>랭킹 보드</h2>
        <button type="button" className={styles.resetBtn} onClick={handleReset}>
          기록 초기화
        </button>
      </div>

      {/* 테이블 영역 */}
      <div className={styles.tableSection}>
        {records.length === 0 ? (
          <p className={styles.empty}>아직 클리어 기록이 없습니다.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>순위</th>
                <th>레벨</th>
                <th>클리어 시간(초)</th>
                <th>기록 시각</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>Level {r.level}</td>
                  <td>{parseFloat(r.time).toFixed(2)}</td>
                  <td>{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
