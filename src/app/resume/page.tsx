'use client';

import { createStyles } from '@mantine/emotion';
import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'usehooks-ts';
import { Layout } from '@/components/Layouts/Layout';
import {
  entranceAnimation,
  MAIN_COLOR,
  SHADOW,
  WHITE,
} from '@/components/Utils/DefaultStyle';
import { MyImage } from '@/components/Utils/MyImage';
import { ForeignLanguages } from './components/ForeignLanguages';
import { Interests } from './components/Interests';
import { Education, Experience } from './components/Past';
import { ProgrammingLanguages } from './components/ProgrammingLanguages';
import { Skills } from './components/Skills';
import { Summary } from './Summary';

const Resume: NextPage = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const { width } = useWindowSize();

  return (
    <Layout summary={<Summary />}>
      <div className={classes.container}>
        <div className={classes.title}>{t('resume.mario-larsen')}</div>
        <div className={classes.subTitle}>
          {width < 450 ? t('resume.subTitleFull') : t('resume.subTitle')}
        </div>
        <MyImage
          src="/image/Resume/selfie.jpg"
          width={3941}
          height={2556}
          style={{ width: '100%' }}
        />
        <div className={classes.listTitle}>{t('resume.education')}</div>
        <Education />
        <div className={classes.listTitle}>{t('resume.experience')}</div>
        <Experience />
        <div className={classes.dualContainer}>
          <div className={classes.columnContainer}>
            <div className={classes.listTitle}>{t('resume.foreign')}</div>
            <ForeignLanguages />
            <div className={classes.listTitle}>{t('resume.skills')}</div>
            <Skills />
          </div>
          <div className={classes.columnContainer}>
            <div className={classes.listTitle}>{t('resume.programming')}</div>
            <ProgrammingLanguages />
          </div>
        </div>
        <div className={classes.listTitle}>{t('resume.interest')}</div>
        <Interests />
      </div>
    </Layout>
  );
};

const useStyles = createStyles(() => ({
  container: {
    maxWidth: 1000,
    backgroundColor: WHITE,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    animation: entranceAnimation(0.1),
    boxShadow: SHADOW,
  },
  title: {
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bold',
    marginTop: 10,
    color: MAIN_COLOR,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: '1em',
    fontStyle: 'italic',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  dualContainer: {
    '@media (min-width: 1000px)': {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  },
  columnContainer: {
    '@media (min-width: 1000px)': {
      width: '50%',
    },
  },
  listTitle: {
    backgroundColor: MAIN_COLOR,
    color: WHITE,
    textAlign: 'center',
    fontSize: '1.5em',
  },
}));

export default Resume;
