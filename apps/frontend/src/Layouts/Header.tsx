import { createStyles, keyframes } from '@mantine/core';
import {
  LIGHT_ADDITIONAL_COLOR,
  WHITE_ADDITIONAL_COLOR,
  MAIN_COLOR,
  SHADOW,
  WHITE,
} from '../Utils/DefaultStyle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import i18n from '../Utils/i18n';
import { useTranslation } from 'react-i18next';
import { MyImage } from '../Utils/MyImage';
import { useWindowSize } from 'usehooks-ts';

export const Header = ({
  children,
  reduced,
}: {
  children?: JSX.Element | undefined;
  reduced?: boolean | undefined;
}) => {
  const { classes } = useStyles();
  const router = useRouter();
  const { t } = useTranslation();
  const { width } = useWindowSize();

  return (
    <div
      className={classes.header}
      style={
        reduced
          ? {
              opacity: 0,
              transform: 'translateY(-100%)',
            }
          : {}
      }
    >
      <div className={classes.menu}>
        <Link
          href={'/'}
          className={classes.logo}
          style={{
            height: width < 500 ? (154 * 3) / 4 : 154,
          }}
        >
          <MyImage src="/image/logo.png" width={201} height={154} />
        </Link>
        <div className={classes.links}>
          <Link href={'/'} className={classes.link} passHref>
            <div
              style={
                '/' === router.pathname ? { color: LIGHT_ADDITIONAL_COLOR } : {}
              }
            >
              {t('header.blog')}
            </div>
          </Link>
          {/* <Link href={'/games'} className={classes.link} passHref>
            <div
              style={'/games' === router.pathname ? { color: LIGHT_ADDITIONAL_COLOR } : {}}
            >
              {t('header.games')}
            </div>
          </Link>
          <Link href={'/tools'} className={classes.link} passHref>
            <div
              style={'/tools' === router.pathname ? { color: LIGHT_ADDITIONAL_COLOR } : {}}
            >
              {t('header.tools')}
            </div>
          </Link> */}
          <div
            key={t('header.otherLang.alt')}
            className={classes.link}
            onClick={() => {
              i18n.changeLanguage(t('header.otherLang.lang') || 'en');
              localStorage.setItem(
                'currentLanguage',
                t('header.otherLang.lang') || 'en'
              );
            }}
          >
            {t('header.switchTo')}
            <MyImage
              src={t('header.otherLang.flag')}
              width={24}
              height={24}
              style={{ width: '2em' }}
            />
          </div>
        </div>
      </div>
      {!!children && <div className={classes.summary}>{children}</div>}
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    paddingTop: 10,
    transition: 'opacity 0.3s, transform 0.3s',
    [theme.fn.smallerThan(950)]: {
      flexDirection: 'column',
    },
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    [theme.fn.smallerThan(600)]: {
      alignSelf: 'center',
      justifyContent: 'space-around',
      width: '100%',
    },
    [theme.fn.smallerThan(500)]: {
      marginTop: 0,
    },
    [theme.fn.smallerThan(360)]: {
      flexDirection: 'column',
    },
  },
  links: {
    background: MAIN_COLOR,
    boxShadow: SHADOW,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    marginLeft: 20,
    [theme.fn.smallerThan(600)]: {
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
      color: LIGHT_ADDITIONAL_COLOR,
    },
    '&:active': {
      boxShadow: 'none',
    },
    [theme.fn.smallerThan(600)]: {
      padding: 5,
      width: '10em',
    },
  },
  logo: {
    width: 201,
    height: 120,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    animation: `${keyframes({
      '0%': { transform: 'translateY(0)' },
      '40%': { transform: 'translateY(-5px)' },
      '100%': { transform: 'translateY(0)' },
    })} 5s ease-in-out infinite`,
  },
  summary: {
    boxShadow: SHADOW,
    backgroundColor: WHITE_ADDITIONAL_COLOR,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    width: 300,
    maxWidth: '80%',
    overflow: 'warp',
    animation: `${keyframes({
      '0%': { opacity: 0, transform: 'translateX(100px)' },
      '100%': { opacity: 1, transform: 'translateX(0)' },
    })} 0.5s 0.5s both`,
    [theme.fn.smallerThan(400)]: {
      alignSelf: 'center',
      animation: 'none',
      width: '80%',
    },
  },
}));
