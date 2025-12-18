import { axiosInstance } from './axiosInstance';
import type {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from '@/types/user';

const postLogin = async (body: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>('/auth/login', body);
  return response.data;
};

const postSignup = async (body: SignUpRequest): Promise<SignUpResponse> => {
  const response = await axiosInstance.post<SignUpResponse>('/users', body);
  return response.data;
};

export { postLogin, postSignup };
