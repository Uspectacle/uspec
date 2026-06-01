'use client';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Interests.module.css';

export const Interests = () => {
  const { t } = useTranslation();

  const interestRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.container} ref={interestRef}>
      {t('resume.interestText')}
    </div>
  );
};
