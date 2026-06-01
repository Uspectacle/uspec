'use client';

import { createStyles } from '@mantine/emotion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { DefaultPost } from '@/components/Blog/DefaultPost';
import { pick } from '@/components/Utils/random';
import { Note } from './components/Note';
import { ProjectList } from './components/ProjectsList';

export const PortfolioPost = ({ index }: { index: number }) => {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const seedRef = useRef(Math.random());

  const seed = seedRef.current;
  console.log(seed);
  const project = pick(ProjectList(t), seed);

  return (
    <DefaultPost
      title={t('posts.portfolio.title')}
      text={t('posts.portfolio.text')}
      href={'/portfolio'}
      image={
        <Note seed={seed}>
          <div className={classes.image}>{project.image}</div>
        </Note>
      }
      index={index}
    />
  );
};

const useStyles = createStyles(() => ({
  image: {
    border: 'solid 10px white',
  },
}));
