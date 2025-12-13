import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { StepId } from '@/components/signup/StepId';
import { StepPassword } from '@/components/signup/StepPassword';
import { StepInfo } from '@/components/signup/StepInfo';

import { validateId, validateInfo, validatePassword } from '@/utils/validation';
import { postSignup } from '@/apis/auth';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    if (step === 1) {
      navigate(-1);
      return;
    }
    setStep((prev) => (prev - 1) as 1 | 2 | 3);
  };

  const validateStep = () => {
    if (step === 1) {
      return id.length > 0 && validateId(id) === null;
    }

    if (step === 2) {
      return validatePassword(password, confirmPassword) === null;
    }

    if (step === 3) {
      if (!name.trim() || !email.trim() || !age.trim()) return false;
      return validateInfo(name, email, age) === null;
    }

    return false;
  };

  const handleNextStep = async () => {
    if (!validateStep()) return;

    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
      return;
    }

    await handleSubmit();
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      await postSignup({
        username: id,
        password,
        name,
        email,
        age: Number(age),
      });

      alert(`${name}님, 회원가입이 완료되었습니다!`);
      navigate('/login');
    } catch {
      alert('회원가입 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = !validateStep() || isLoading;

  const buttonText = step === 3 ? '회원가입' : '다음';

  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-md space-y-8">
        <button
          type="button"
          onClick={handleBack}
          className="text-[var(--color-primary)] text-2xl"
        >
          ←
        </button>

        <h1 className="text-2xl font-semibold text-[var(--color-foreground)]">
          회원가입
        </h1>

        {step === 1 && <StepId value={id} onChange={setId} />}

        {step === 2 && (
          <StepPassword
            password={password}
            confirmPassword={confirmPassword}
            onChangePassword={setPassword}
            onChangeConfirmPassword={setConfirmPassword}
          />
        )}

        {step === 3 && (
          <StepInfo
            name={name}
            email={email}
            age={age}
            onChangeName={setName}
            onChangeEmail={setEmail}
            onChangeAge={setAge}
          />
        )}

        <Button
          type="button"
          onClick={handleNextStep}
          disabled={isDisabled}
          fullWidth
        >
          {buttonText}
        </Button>

        <div className="text-center text-sm mt-2">
          <span className="text-[var(--color-foreground)]">
            이미 계정이 있나요?{' '}
          </span>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-[var(--color-primary)] font-medium hover:underline"
          >
            로그인으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export { SignUpPage };
