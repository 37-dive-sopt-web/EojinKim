import { Input } from '@/components/common/Input';
import { validateInfo } from '@/utils/validation';
import type { StepInfoProps } from '@/types/auth';

export const StepInfo = ({
  name,
  email,
  age,
  onChangeName,
  onChangeEmail,
  onChangeAge,
}: StepInfoProps) => {
  const infoError = validateInfo(name, email, age);

  return (
    <div className="w-full space-y-6">
      <Input
        label="이름"
        placeholder="이름을 입력해 주세요"
        value={name}
        onChange={(e) => onChangeName(e.target.value)}
      />

      <Input
        label="이메일"
        type="email"
        placeholder="name@example.com"
        value={email}
        onChange={(e) => onChangeEmail(e.target.value)}
      />

      <Input
        label="나이"
        type="number"
        placeholder="숫자로 입력"
        value={age}
        onChange={(e) => onChangeAge(e.target.value)}
      />

      {infoError && <p className="text-sm text-red-500">{infoError}</p>}
    </div>
  );
};
