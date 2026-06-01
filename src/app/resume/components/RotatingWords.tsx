import { keyframes } from '@emotion/react';
import { createStyles } from '@mantine/emotion';
import { MAIN_COLOR } from '@/components/Utils/DefaultStyle';

export const RotatingWords = ({ words }: { words: string[] }) => {
  const { classes } = useStyles({ length: words.length });
  return (
    <div className={classes.container}>
      <div className={classes.words}>
        {words.map((word) => (
          <div className={classes.word} key={`word_${word}`}>
            {word}
          </div>
        ))}
        {words.map((word) => (
          <div className={classes.word} key={`word_copy_${word}`}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

const animation = (length: number) => {
  const jsonKeyframes = Array.from(
    { length: length * 2 },
    (_, index) =>
      `"${
        (50 * index + (index % 2 ? 50 : 40)) / length
      }%": { "transform" : "translateY(-${
        index * 0.75 + (index % 2 ? 0.75 : 1.62)
      }em)"}`,
  );
  return keyframes(JSON.parse(`{${jsonKeyframes.join(', ')}}`));
};

const useStyles = createStyles((_theme, { length }: { length: number }) => ({
  container: {
    boxSizing: 'content-box',
    display: 'flex',
    width: '100%',
    height: '17em',
    fontWeight: 500,
    justifyContent: 'center',
    overflow: 'hidden',
    fontSize: '1.2em',
    '@media (max-width: 350px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
    },
  },
  words: {
    animation: `${animation(length)} ${length * 1.5}s infinite`,
  },
  word: {
    display: 'block',
    height: '1.5em',
    paddingLeft: 10,
    color: MAIN_COLOR,
  },
}));
