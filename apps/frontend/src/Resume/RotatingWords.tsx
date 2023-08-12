import { createStyles, keyframes } from '@mantine/core';
import { PURPLE_INTENSE } from 'apps/frontend/utils/constants';

export const RotatingWords = ({
  text,
  words
}: {
  text: string;
  words: string[];
}) => {
  const { classes } = useStyles({ length: words.length });
  return (
    <div className={classes.container}>
      <div className={classes.text}>{text}</div>
      <div className={classes.words}>
        {words.map((word, index) => (
          <div className={classes.word} key={'word_' + index}>
            {word}
          </div>
        ))}
        {words.map((word, index) => (
          <div className={classes.word} key={'word_copy_' + index}>
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
      }em)"}`
  );
  return keyframes(JSON.parse(`{${jsonKeyframes.join(', ')}}`));
};

const useStyles = createStyles((theme, { length }: { length: number }) => ({
  container: {
    boxSizing: 'content-box',
    display: 'flex',
    width: '100%',
    height: '17em',
    fontWeight: 500,
    justifyContent: 'center',
    overflow: 'hidden',
    fontSize: '1.2em',
    [theme.fn.smallerThan(350)]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start'
    }
  },
  text: {
    paddingTop: '1.5em',
    [theme.fn.smallerThan(350)]: {
      display: 'none'
    }
  },
  words: {
    animation: `${animation(length)} ${length * 1.5}s infinite`
  },
  word: {
    display: 'block',
    height: '1.5em',
    paddingLeft: 10,
    color: PURPLE_INTENSE
  }
}));
