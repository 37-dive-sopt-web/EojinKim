import { Input } from '@/components/common/Input';
import { validateId } from '@/utils/validation';
import type { StepIdProps } from '@/types/auth';

export const StepId = ({ value, onChange }: StepIdProps) => {
  const idError = value.length > 0 ? validateId(value) : null;

  return (
    <div className="w-full space-y-4">
      <Input
        label="아이디"
        placeholder="아이디를 입력해 주세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {idError && <p className="text-sm text-red-500">{idError}</p>}
    </div>
  );
};
