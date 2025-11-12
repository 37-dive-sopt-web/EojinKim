// 배열을 무작위로 섞는 함수 (Fisher-Yates 알고리즘)
function shuffle(array, rng = Math.random) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 레벨에 맞는 카드 덱 생성
export function buildDeck(level = 1) {
  const LEVEL_TO_GRID = { 1: [4, 4], 2: [4, 6], 3: [6, 6] };
  const [rows, cols] = LEVEL_TO_GRID[level] ?? [4, 4];
  const total = rows * cols;

  if (total % 2 !== 0) throw new Error('카드 개수는 짝수여야 합니다.');

  const pairs = total / 2;
  const base = Array.from({ length: pairs }, (_, i) => i + 1);

  // 각 카드 값을 두 개씩 복제
  const duplicated = base.flatMap((v) => [
    { id: `${v}-a`, value: v },
    { id: `${v}-b`, value: v },
  ]);

  // 무작위로 섞어서 반환
  return shuffle(duplicated);
}
