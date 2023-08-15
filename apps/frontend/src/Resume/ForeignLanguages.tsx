import { createStyles } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MyImage } from '../Utils/MyImage';
import { SHADOW } from '../../utils/DefaultStyle';

export const ForeignLanguages = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <ul className={classes.container}>
      <li>
        {t('resume.french.name')}
        <MyImage
          src="/svg/flag-fr.svg"
          width={800}
          height={800}
          style={{ height: '5em' }}
        />
        ★★★★★
        <br />
        {t('resume.french.level')}
      </li>
      <li>
        {t('resume.english.name')}
        <MyImage
          src="/svg/flag-en.svg"
          width={800}
          height={800}
          style={{ height: '5em' }}
        />
        ★★★★★
        <br />
        {t('resume.english.level')}
        <br />
        <div className={classes.bonusInfo}>{t('resume.english.bonus')}</div>
      </li>
      <li>
        {t('resume.spanish.name')}
        <MyImage
          src="/svg/flag-es.svg"
          width={800}
          height={800}
          style={{ height: '5em' }}
        />
        ★★★☆☆
        <br />
        {t('resume.spanish.level')}
      </li>
    </ul>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'wrap',
    '& > li': {
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      boxShadow: SHADOW,
      width: 130,
      alignItems: 'center',
      padding: 5,
      borderRadius: 5,
      margin: 5,
      [theme.fn.smallerThan(500)]: {
        width: 100,
      },
    },
  },
  bonusInfo: {
    fontSize: '0.8em',
    fontStyle: 'italic',
  },
}));
