'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DefaultPost } from '@/components/Blog/DefaultPost';
import { pick } from '@/utils/random';
import { Note } from './components/Note';
import { ProjectList } from './components/ProjectsList';
import styles from './PortfolioPost.module.css';

export const PortfolioPost = ({ index }: { index?: number }) => {
  const { t } = useTranslation();

  const [seed, setSeed] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setSeed(Math.random());

    const interval = setInterval(() => {
      setSeed(Math.random());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const isReady = isMounted && seed !== null;
  const projects = ProjectList(t);
  const project = isReady ? pick(projects, seed) : projects[0];

  return (
    <DefaultPost
      title={t('posts.portfolio.title')}
      text={t('posts.portfolio.text')}
      href="/portfolio"
      image={
        isReady ? (
          <Note seed={seed} actionable>
            <div className={styles.image}>{project.image}</div>
          </Note>
        ) : undefined
      }
      index={index}
    />
  );
};
