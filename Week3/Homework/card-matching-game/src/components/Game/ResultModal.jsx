import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as s from './ResultModal.css.js';

export default function ResultModal({ isWin, level, clearTime, onClose }) {
  const [count, setCount] = useState(3);

  // 카운트다운
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 0초가 되면 게임 재시작
  useEffect(() => {
    if (count === 0) onClose();
  }, [count, onClose]);

  return createPortal(
    <div className={s.overlay}>
      <div className={s.modal}>
        <h2 className={s.title}>{isWin ? '축하해요 🥳' : '아쉬워요 😢'}</h2>

        {isWin ? (
          <p className={s.text}>
            <strong>Level {level}</strong>을{' '}
            <strong>{Number(clearTime).toFixed(2)}초</strong> 만에 클리어했어요!
          </p>
        ) : (
          <p className={s.text}>시간이 초과됐어요. 다음엔 더 빨리!</p>
        )}

        <p className={s.notice}>{count}초 후 자동으로 새 게임을 시작해요</p>
      </div>
    </div>,
    document.body
  );
}
