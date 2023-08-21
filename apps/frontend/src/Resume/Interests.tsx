import { createStyles } from '@mantine/core';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
// import { lookAgain } from './LookAgain';
import { PURPLE_INTENSE } from '../Utils/DefaultStyle';

export const Interests = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  // const interestsList = [
  //   t('resume.interestsList.courses'),
  //   t('resume.interestsList.implementation'),
  //   t('resume.interestsList.development'),
  //   t('resume.interestsList.psl'),
  //   t('resume.interestsList.film'),
  //   t('resume.interestsList.delegate'),
  //   t('resume.interestsList.running'),
  //   t('resume.interestsList.association'),
  // ];

  const interestRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={classes.container} ref={interestRef}>
      {t('resume.intrest')}
      {/* <strong>{t('resume.interests.look-at-it-again')}</strong> */}
      {/* {t('resume.interests.text')}
      <br />
      <br /> */}
      {/* <span>{lookAgain(interestRef, interestsList)}</span> */}
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    strong: { color: PURPLE_INTENSE },
    span: { fontWeight: 500 },
  },
}));
