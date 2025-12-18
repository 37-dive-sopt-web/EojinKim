export interface StepIdProps {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

export interface StepPasswordProps {
  password: string;
  confirmPassword: string;
  onChangePassword: (value: string) => void;
  onChangeConfirmPassword: (value: string) => void;
  errorMessage?: string;
}

export interface StepInfoProps {
  name: string;
  email: string;
  age: string;
  onChangeName: (value: string) => void;
  onChangeEmail: (value: string) => void;
  onChangeAge: (value: string) => void;
  errorMessage?: string;
  isLoading?: boolean;
}
