interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: 'ACTIVE' | 'INACTIVE';
}

interface LoginRequest {
  username: string;
  password: string;
}

interface SignUpRequest {
  username: string;
  password: string;
  name: string;
  email: string;
  age: number;
}

interface LoginResponse {
  userId: number;
  name: string;
}

interface SignUpResponse {
  id: number;
  name: string;
}

interface UpdateUserRequest {
  name: string;
  email: string;
  age: number;
}

interface DeleteUserRequest {
  id: string;
}

export type {
  User,
  LoginRequest,
  SignUpRequest,
  LoginResponse,
  SignUpResponse,
  UpdateUserRequest,
  DeleteUserRequest,
};
