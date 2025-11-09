import { useState, useEffect } from 'react';

// localStorage에 데이터를 저장하고 관리하는 커스텀 훅
export default function useLocalStorage(key, initialValue = []) {
  // 초기 로드 시 localStorage 값 불러오기
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error('로컬스토리지 불러오기 오류:', err);
      return initialValue;
    }
  });

  // storedValue가 바뀔 때마다 localStorage에 저장
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (err) {
      console.error('로컬스토리지 저장 오류:', err);
    }
  }, [key, storedValue]);

  // 새로운 기록 추가
  const addRecord = (newRecord) => {
    setStoredValue((prev) => [newRecord, ...prev]);
  };

  // localStorage 전체 초기화
  const clearStorage = () => {
    setStoredValue([]);
    window.localStorage.removeItem(key);
  };

  return { storedValue, addRecord, clearStorage };
}
