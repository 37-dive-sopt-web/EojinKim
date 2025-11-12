import {
  card,
  flipped,
  matched,
  inner,
  front,
  back,
  backMatched,
} from './GameCard.css.js';

export default function GameCard({
  value,
  isFlipped,
  isMatched,
  onClick,
  size,
}) {
  const rootCls = `${card} ${isFlipped ? flipped : ''} ${
    isMatched ? matched : ''
  }`;
  const backCls = `${back} ${isMatched ? backMatched : ''}`;

  return (
    <div
      className={rootCls}
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className={inner}>
        <div className={front}>?</div>
        <div className={backCls}>{value}</div>
      </div>
    </div>
  );
}
