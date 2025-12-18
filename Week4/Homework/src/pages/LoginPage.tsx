import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postLogin } from '@/apis/auth';
import { setUserId } from '@/utils/storage';

import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isFormValid = username.trim() !== '' && password.trim() !== '';

  const handleLogin = async () => {
    if (!isFormValid || isLoading) return;

    try {
      setIsLoading(true);
      setErrorMessage('');

      const response = await postLogin({ username, password });
      setUserId(response.userId);

      navigate('/mypage');
    } catch {
      setErrorMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="page-container">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-2xl font-semibold text-[var(--color-foreground)]">
          로그인
        </h1>

        <div className="flex flex-col gap-4">
          <Input
            label="아이디"
            placeholder="아이디를 입력해 주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            showPasswordToggle
          />
        </div>

        {errorMessage && (
          <p className="text-sm text-red-500 text-center">{errorMessage}</p>
        )}

        <div className="flex flex-col gap-4">
          <Button
            type="button"
            size="lg"
            variant="primary"
            fullWidth
            disabled={!isFormValid || isLoading}
            onClick={handleLogin}
          >
            {isLoading ? '로그인 중...' : '로그인'}
          </Button>

          <button
            type="button"
            className="w-full text-sm text-[var(--color-primary)] hover:underline"
            onClick={() => navigate('/signup')}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
