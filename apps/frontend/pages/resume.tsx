import { createStyles } from '@mantine/core';
import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React from 'react';
import {
  MAIN_COLOR,
  SHADOW,
  WHITE,
  entranceAnimation,
} from '../src/Utils/DefaultStyle';
import { useTranslation } from 'react-i18next';
import { MyImage } from '../src/Utils/MyImage';
import { getWindow } from '../src/Utils/GetWindow';
import { Summary } from '../src/Resume/Summary';
import { Education, Experience } from '../src/Resume/Past';
import { ForeignLanguages } from '../src/Resume/ForeignLanguages';
import { Skills } from '../src/Resume/Skills';
import { ProgrammingLanguages } from '../src/Resume/ProgrammingLanguages';
import { Interests } from '../src/Resume/Interests';

const Resume: NextPage = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const { innerWidth } = getWindow();

  return (
    <Layout summary={<Summary />}>
      <div className={classes.container}>
        <div className={classes.title}>{t('resume.mario-larsen')}</div>
        <div className={classes.subTitle}>
          {innerWidth < 450 ? t('resume.subTitleFull') : t('resume.subTitle')}
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

const useStyles = createStyles((theme) => ({
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
    [theme.fn.largerThan(1000)]: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  },
  columnContainer: {
    [theme.fn.largerThan(1000)]: {
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
