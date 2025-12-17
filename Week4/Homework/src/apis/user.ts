import { axiosInstance } from './axiosInstance';
import type { User, UpdateUserRequest } from '@/types/user';

const getUser = async (userId: number): Promise<User> => {
  const response = await axiosInstance.get<{ data: User }>(`/users/${userId}`);

  return response.data.data;
};

const updateUser = async (
  userId: number,
  body: UpdateUserRequest
): Promise<User> => {
  const response = await axiosInstance.patch<{ data: User }>(
    `/users/${userId}`,
    body
  );

  return response.data.data;
};

const deleteUser = async (userId: number): Promise<void> => {
  await axiosInstance.delete(`/users/${userId}`);
};

export { getUser, updateUser, deleteUser };
