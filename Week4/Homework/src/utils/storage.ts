const KEY_USER_ID = 'userId';

const getUserId = (): number | null => {
  const value = localStorage.getItem(KEY_USER_ID);
  return value ? Number(value) : null;
};

const setUserId = (userId: number): void => {
  localStorage.setItem(KEY_USER_ID, String(userId));
};

const removeUserId = (): void => {
  localStorage.removeItem(KEY_USER_ID);
};

export { getUserId, setUserId, removeUserId };
