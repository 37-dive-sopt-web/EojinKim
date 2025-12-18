import { useState, useId, type InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
}

const Input = ({
  label,
  error,
  showPasswordToggle = false,
  className,
  type = 'text',
  ...props
}: InputProps) => {
  const inputId = useId();
  const errorId = useId();

  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === 'password' && showPasswordToggle;

  const inputType = isPasswordField
    ? showPassword
      ? 'text'
      : 'password'
    : type;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          type={inputType}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'input-base',
            error && 'input-error',
            isPasswordField && 'pr-11',
            className
          )}
          {...props}
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              text-gray-500 hover:text-gray-700
            "
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {error && (
        <p id={errorId} className="text-xs text-red-500 mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export { Input };
