import styles from './RandomCircle.module.css';

const randomScale = (focus: number) => `scale(${1 + focus / 3})`;
const randomTranslate = () =>
  `translate(${Math.random() * 120 - 10}vw, ${Math.random() * 120 - 10}vh)`;
const randomTransform = (focus: number) =>
  `${randomScale(focus)} ${randomTranslate()}`;
const randomShadow = (focus: number) =>
  `0px 0px ${6 - focus * 5}px ${focus * 5}px var(--main-color)`;

const randomState = () => {
  const focus = Math.random();

  return `{
    transform: ${randomTransform(focus)};
    opacity: ${focus / 3};
    box-shadow: ${randomShadow(focus)};
  }`;
};

export const RandomCircle = () => {
  const defaultState = randomState();
  const animationName = `random-circle-${Math.random().toString(36).slice(2)}`;
  const duration = Math.random() * 100 + 200;

  const keyframes = `
    @keyframes ${animationName} {
      0% ${defaultState}
      25% ${randomState()}
      50% ${randomState()}
      75% ${randomState()}
      100% ${defaultState}
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        className={styles.circle}
        style={{
          animation: `${animationName} ${duration}s cubic-bezier(0.4, 0.1, 0.7, 1) infinite`,
          width: Math.random() * 200,
        }}
      />
    </>
  );
};
