import { ERROR_MESSAGES } from '@/constants/message';

// 아이디
export const validateId = (value: string) => {
  if (value.length > 50) return ERROR_MESSAGES.ID_MAX_LENGTH;
  return null;
};

// 비밀번호
export const validatePassword = (password: string, confirmPassword: string) => {
  if (password.length < 8 || password.length > 64) {
    return ERROR_MESSAGES.PASSWORD_LENGTH;
  }
  if (!/[A-Z]/.test(password)) {
    return ERROR_MESSAGES.PASSWORD_UPPER;
  }
  if (!/[0-9]/.test(password)) {
    return ERROR_MESSAGES.PASSWORD_NUMBER;
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return ERROR_MESSAGES.PASSWORD_SPECIAL;
  }
  if (!confirmPassword) {
    return ERROR_MESSAGES.PASSWORD_REQUIRED;
  }
  if (password !== confirmPassword) {
    return ERROR_MESSAGES.PASSWORD_MISMATCH;
  }
  return null;
};

// 회원정보
export const validateInfo = (name: string, email: string, age: string) => {
  if (name.length > 0 && !name.trim()) {
    return ERROR_MESSAGES.NAME_REQUIRED;
  }

  if (email.length > 0) {
    const emailRegex = /^[0-9a-zA-Z._%+-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return ERROR_MESSAGES.EMAIL_INVALID;
    }
  }

  if (age.length > 0 && !age.trim()) {
    return ERROR_MESSAGES.AGE_REQUIRED;
  }

  return null;
};
