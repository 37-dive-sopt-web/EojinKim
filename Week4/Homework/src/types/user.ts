export type User = {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: 'ACTIVE' | 'INACTIVE';
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  userId: number;
  name: string;
};

export type SignUpRequest = {
  username: string;
  password: string;
  name: string;
  email: string;
  age: number;
};

export type SignUpResponse = {
  id: number;
  name: string;
};

export type UpdateUserRequest = Partial<Pick<User, 'name' | 'email' | 'age'>>;
