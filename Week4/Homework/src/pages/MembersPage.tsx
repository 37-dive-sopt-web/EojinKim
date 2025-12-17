import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@/components/member/Header';
import { Modal } from '@/components/member/Modal';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';

const MembersPage = () => {
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState('');
  const [member, setMember] = useState<null | {
    name: string;
    username: string;
    email: string;
    age: number;
  }>(null);

  const [error, setError] = useState('');
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  const handleSearch = () => {
    if (memberId === '24') {
      setMember({
        name: 'fsef',
        username: 'esfegs',
        email: 'sfe@sfes.com',
        age: 43,
      });
      setError('');
    } else {
      setMember(null);
      setError('사용자를 찾을 수 없습니다.');
    }
  };

  const handleWithdraw = async () => {
    alert('회원탈퇴가 완료되었습니다.');
    navigate('/login');
  };

  return (
    <>
      <Header userName="어진" onWithdrawClick={() => setIsWithdrawOpen(true)} />

      <main className="mypage-container">
        <section className="mypage-section">
          <h2 className="mypage-title">회원 조회</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="space-y-6"
          >
            <Input
              label="회원 ID"
              type="number"
              placeholder="숫자만 입력"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />

            <Button type="submit" disabled={!memberId} fullWidth>
              확인
            </Button>
          </form>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          {member && (
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">이름</span>
                <span className="font-semibold">{member.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">아이디</span>
                <span className="font-semibold">{member.username}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">이메일</span>
                <span className="font-semibold">{member.email}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">나이</span>
                <span className="font-semibold">{member.age}</span>
              </div>
            </div>
          )}
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

export default MembersPage;
