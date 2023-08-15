import { createStyles } from '@mantine/core';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { PURPLE_INTENSE, GREEN_WHITE, SHADOW } from '../../utils/DefaultStyle';

interface Props {
  href: string;
  image: JSX.Element;
  years: string;
  name: string;
  subName: string;
  city: string;
  text?: string | undefined;
  activity?: string | undefined;
  objective?: string | undefined;
  result?: string | undefined;
}

export const PastElement = ({
  href,
  image,
  years,
  name,
  subName,
  city,
  text,
  activity,
  objective,
  result,
}: Props) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <li className={classes.container}>
      <Link
        href={href}
        target={'_blank'}
        rel={'noreferrer'}
        className={classes.link}
        passHref
      >
        <div className={classes.image}>{image}</div>
        <div className={classes.infos}>
          <div className={classes.years}>{years}</div>
          <div className={classes.name}>{name}</div>
          <div className={classes.subName}>{subName}</div>
          <div className={classes.city}>{city}</div>
        </div>
      </Link>
      <div className={classes.text}>
        {!!text && <>{text}</>}
        {!!activity && (
          <>
            {!!text && <br />}
            <strong>{t('resume.activity')}</strong>
            {activity}
          </>
        )}
        {!!objective && (
          <>
            {!!(text || activity) && <br />}
            <strong>{t('resume.objective')}</strong>
            {objective}
          </>
        )}
        {!!result && (
          <>
            {!!(text || activity || objective) && <br />}
            <strong>{t('resume.result')}</strong>
            {result}
          </>
        )}
      </div>
    </li>
  );
};

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    paddingTop: 10,
    width: '100%',
    overflow: 'warp',
  },
  image: {
    width: '5em',
    height: '5em',
  },
  infos: {
    marginLeft: 20,
    color: 'black',
  },
  years: {},
  name: {
    fontWeight: 'bold',
    color: PURPLE_INTENSE,
  },
  subName: {},
  city: {},
  text: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: GREEN_WHITE,
    boxShadow: SHADOW,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    fontSize: '0.9em',
    '& > strong': { marginTop: '1em' },
  },
}));
