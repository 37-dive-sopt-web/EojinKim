import { useState } from 'react';
import Header from './components/Header/Header';
import GameBoard from './components/Game/GameBoard';
import RankingBoard from './components/Ranking/RankingBoard';
import * as styles from './App.css.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('game');

  return (
    <div className={styles.appContainer}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.content}>
        {activeTab === 'game' && <GameBoard />}
        {activeTab === 'ranking' && <RankingBoard />}
      </div>
    </div>
  );
}
