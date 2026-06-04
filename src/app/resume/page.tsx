'use client';

import type { NextPage } from 'next';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/Layouts/Layout';
import { ForeignLanguages } from './components/ForeignLanguages';
import { Interests } from './components/Interests';
import { Education, Experience } from './components/Past';
import { ProgrammingLanguages } from './components/ProgrammingLanguages';
import { Skills } from './components/Skills';
import styles from './page.module.css';
import { Summary } from './Summary';

const Resume: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout summary={<Summary />}>
      <div className={styles.container}>
        <div className={styles.title}>{t('resume.mario-larsen')}</div>
        <div className={styles.subTitle}>{t('resume.subTitle')}</div>
        <Image
          className={styles.picture}
          src="/image/Resume/selfie.png"
          alt="selfie"
          width={3941}
          height={2556}
        />
        <div className={styles.listTitle}>{t('resume.experience')}</div>
        <Experience />
        <div className={styles.listTitle}>{t('resume.education')}</div>
        <Education />
        <div className={styles.dualContainer}>
          <div className={styles.columnContainer}>
            <div className={styles.listTitle}>{t('resume.foreign')}</div>
            <ForeignLanguages />
            <div className={styles.listTitle}>{t('resume.skills')}</div>
            <Skills />
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.listTitle}>{t('resume.programming')}</div>
            <ProgrammingLanguages />
          </div>
        </div>
        <div className={styles.listTitle}>{t('resume.interest')}</div>
        <Interests />
      </div>
    </Layout>
  );
};

export default Resume;
