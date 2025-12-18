import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@/components/member/Header';
import { Modal } from '@/components/member/Modal';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';

import { getUserId, removeUserId } from '@/utils/storage';
import { getUser, updateUser, deleteUser } from '@/apis/user';
import type { User } from '@/types/user';

const MyPage = () => {
  const navigate = useNavigate();

  const userId = getUserId();

  const [user, setUser] = useState<User | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  useEffect(() => {
    if (!userId) {
      navigate('/login');
      return;
    }

    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const data = await getUser(userId);

        setUser(data);
        setForm({
          name: data.name,
          email: data.email,
          age: String(data.age),
        });
      } catch {
        alert('사용자 정보를 불러오지 못했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [userId, navigate]);

  if (!user) return null;

  const isChanged =
    form.name !== user.name ||
    form.email !== user.email ||
    form.age !== String(user.age);

  const handleSave = async () => {
    if (!userId || !isChanged) return;

    try {
      setIsLoading(true);

      const updated = await updateUser(userId, {
        name: form.name,
        email: form.email,
        age: Number(form.age),
      });

      setUser(updated);
      setForm({
        name: updated.name,
        email: updated.email,
        age: String(updated.age),
      });

      alert('정보가 저장되었습니다.');
    } catch {
      alert('정보 저장 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWithdraw = async () => {
    if (!userId) return;

    try {
      setIsLoading(true);
      await deleteUser(userId);

      removeUserId();
      alert('회원 탈퇴가 완료되었습니다.');
      navigate('/login');
    } catch {
      alert('회원 탈퇴 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header
        userName={user.name}
        onWithdrawClick={() => setIsWithdrawOpen(true)}
      />

      <main className="mypage-container">
        <section className="mypage-section">
          <h2 className="mypage-title">내 정보</h2>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">아이디</span>
            <span className="text-base font-semibold">{user.username}</span>
          </div>

          <Input
            label="이름"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            label="이메일"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Input
            label="나이"
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />

          <Button
            type="button"
            onClick={handleSave}
            disabled={!isChanged || isLoading}
            fullWidth
          >
            저장
          </Button>
        </section>
      </main>

      <Modal
        open={isWithdrawOpen}
        title="정말 탈퇴하시겠어요?"
        description="탈퇴 후에는 모든 정보가 삭제돼요"
        confirmText="회원탈퇴"
        cancelText="취소"
        danger
        onConfirm={handleWithdraw}
        onCancel={() => setIsWithdrawOpen(false)}
      />
    </>
  );
};

export default MyPage;
