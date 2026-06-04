'use client';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Markdown from 'react-markdown';
import { PortfolioPost } from '@/app/portfolio/PortfolioPost';
import styles from './Interests.module.css';

export const Interests = () => {
  const { t } = useTranslation();

  const interestRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.container} ref={interestRef}>
      <Markdown>{t('resume.interestText')}</Markdown>
      <PortfolioPost />
    </div>
  );
};
