import { useEffect, useRef, useState } from 'react';

// 타이머 기능을 관리하는 커스텀 훅
export default function useTimer(initialTime, isRunning, onTimeout) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerRef = useRef(null); // setInterval ID 저장용

  // 타이머 실행/정지 로직
  useEffect(() => {
    if (!isRunning) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        // 0.1초 이하일 때 타이머 종료
        if (prev <= 0.1) {
          clearInterval(timerRef.current);
          onTimeout?.(); // 타임아웃 콜백 실행
          return 0;
        }
        // 소수 둘째 자리까지 유지
        return parseFloat((prev - 0.1).toFixed(2));
      });
    }, 100);

    // 언마운트 시 타이머 정리
    return () => clearInterval(timerRef.current);
  }, [isRunning, onTimeout]);

  // 타이머 초기화
  const resetTimer = (newTime = initialTime) => {
    clearInterval(timerRef.current);
    setTimeLeft(newTime);
  };

  return { timeLeft, resetTimer };
}
