import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';

import { cn } from '@/utils/cn';
import { removeUserId } from '@/utils/storage';

interface HeaderProps {
  userName: string;
  onWithdrawClick: () => void;
}

interface MenuItem {
  label: string;
  path: string;
}

const MENU_ITEMS: MenuItem[] = [
  { label: '내 정보', path: '/mypage' },
  { label: '회원 조회', path: '/mypage/members' },
];

const Header = ({ userName, onWithdrawClick }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const menuClass = (active: boolean) =>
    cn(
      'text-white text-sm font-medium transition-opacity text-left',
      active ? 'opacity-100' : 'opacity-60 hover:opacity-80'
    );

  const handleLogout = () => {
    removeUserId();
    navigate('/login');
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[var(--color-primary-light)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-semibold text-white">마이페이지</h1>
          <p className="text-sm text-white/80">
            안녕하세요, <span className="font-semibold">{userName}</span>님
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {MENU_ITEMS.map((menu) => (
            <button
              key={menu.path}
              type="button"
              onClick={() => navigate(menu.path)}
              className={menuClass(isActive(menu.path))}
            >
              {menu.label}
            </button>
          ))}

          <button
            type="button"
            onClick={handleLogout}
            className={menuClass(false)}
          >
            로그아웃
          </button>

          <button
            type="button"
            onClick={onWithdrawClick}
            className={menuClass(false)}
          >
            회원탈퇴
          </button>
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden"
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col gap-4 px-6 pb-4">
          {MENU_ITEMS.map((menu) => (
            <button
              key={menu.path}
              type="button"
              onClick={() => handleNavigate(menu.path)}
              className={menuClass(isActive(menu.path))}
            >
              {menu.label}
            </button>
          ))}

          <button
            type="button"
            onClick={handleLogout}
            className={menuClass(false)}
          >
            로그아웃
          </button>

          <button
            type="button"
            onClick={() => {
              onWithdrawClick();
              setIsMenuOpen(false);
            }}
            className={menuClass(false)}
          >
            회원탈퇴
          </button>
        </nav>
      </div>
    </header>
  );
};

export { Header };
