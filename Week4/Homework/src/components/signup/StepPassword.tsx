import { Input } from '@/components/common/Input';
import { validatePassword } from '@/utils/validation';
import type { StepPasswordProps } from '@/types/auth';

const StepPassword = ({
  password,
  confirmPassword,
  onChangePassword,
  onChangeConfirmPassword,
}: StepPasswordProps) => {
  const passwordError =
    password.length > 0 ? validatePassword(password, confirmPassword) : null;

  return (
    <div className="w-full space-y-6">
      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        value={password}
        onChange={(e) => onChangePassword(e.target.value)}
        showPasswordToggle
      />

      <Input
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => onChangeConfirmPassword(e.target.value)}
        showPasswordToggle
      />

      {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
    </div>
  );
};

export { StepPassword };
