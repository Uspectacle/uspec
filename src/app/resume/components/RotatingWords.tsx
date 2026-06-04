import styles from './RotatingWords.module.css';

const transform = (position: number) => `{
  transform: translateY(${-1.5 * position}em)
}`;

const jsonKeyframes = (length: number) =>
  Array.from(
    { length },
    (_, index) => `
      ${(100 * index + 40) / length}% ${transform(index + 1.1)}
      ${(100 * (index + 1)) / length}% ${transform(index + 1)}
  `,
  ).join('');

export const RotatingWords = ({ words }: { words: string[] }) => {
  const animationName = `rotate-words-${words.length}`;
  const keyframes = `
    @keyframes ${animationName} {
      ${jsonKeyframes(words.length)}
    }
  `;

  return (
    <div className={styles.container}>
      <style>{keyframes}</style>
      <div
        style={{
          animation: `${animationName} ${words.length * 1.5}s infinite`,
        }}
      >
        {words.map((word) => (
          <div className={styles.word} key={`word-${word}`}>
            {word}
          </div>
        ))}
        {words.map((word) => (
          <div className={styles.word} key={`word-copy-${word}`}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};
