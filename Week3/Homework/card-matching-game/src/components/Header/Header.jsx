import {
  headerWrapper,
  headerContainer,
  title,
  tabGroup,
  tab,
  active,
} from './Header.css.js';

export default function Header({ activeTab, setActiveTab }) {
  return (
    <div className={headerWrapper}>
      <header className={headerContainer}>
        <h1 className={title}>숫자 카드 짝 맞추기 ☁️</h1>

        <nav className={tabGroup} aria-label="탭 전환">
          <button
            type="button"
            className={`${tab} ${activeTab === 'game' ? active : ''}`}
            onClick={() => setActiveTab('game')}
          >
            게임
          </button>

          <button
            type="button"
            className={`${tab} ${activeTab === 'ranking' ? active : ''}`}
            onClick={() => setActiveTab('ranking')}
          >
            랭킹
          </button>
        </nav>
      </header>
    </div>
  );
}
