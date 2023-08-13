import { createStyles } from '@mantine/core';
import {
  GREEN_LIGHT,
  PURPLE_INTENSE,
  SHADOW,
  WHITE,
} from '../../utils/DefaultStyle';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MyImage } from '../Utils/MyImage';

export function Footer() {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <strong>{t('footer.contactMe')}</strong>
      <div className={classes.links}>
        <Link
          href={'mailto:uspectacle@gmail.com'}
          target={'_blank'}
          rel={'noreferrer'}
          className={classes.link}
          style={{ fontStyle: 'italic' }}
          passHref
        >
          uspectacle@gmail.com
        </Link>
        <Link href={'/resume'} className={classes.link}>
          {t('footer.resume')}
        </Link>
        <Link
          href={'https://github.com/Uspectacle'}
          target={'_blank'}
          rel={'noreferrer'}
          className={classes.link}
          passHref
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MyImage
              src="/svg/github.svg"
              width={24}
              height={24}
              style={{ width: '1.2em', height: '1.2em' }}
            />
            /Uspectacle
          </div>
        </Link>
      </div>
    </footer>
  );
}

const useStyles = createStyles((theme) => ({
  footer: {
    position: 'relative',
    left: 0,
    bottom: 0,
    width: '100%',
    background: PURPLE_INTENSE,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    color: GREEN_LIGHT,
    paddingTop: 10,
    paddingBottom: 10,
    [theme.fn.smallerThan(400)]: {
      flexDirection: 'column',
    },
  },
  links: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    [theme.fn.smallerThan(700)]: {
      flexDirection: 'column',
    },
  },
  link: {
    boxShadow: SHADOW,
    padding: 10,
    margin: 5,
    height: '2em',
    textDecoration: 'none',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    borderRadius: 10,
    gap: 10,
    color: WHITE,
    transition: 'color 0.3s',
    '&:hover': {
      color: GREEN_LIGHT,
    },
    '&:active': {
      boxShadow: 'none',
    },
    [theme.fn.smallerThan(600)]: {
      padding: 5,
      width: '12em',
    },
  },
}));
