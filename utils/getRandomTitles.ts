
export function getRandomTitles(allTitles: string[], count = 10) {
  const shuffled = [...allTitles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
