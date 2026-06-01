'use client';

import { keyframes } from '@emotion/react';
import { createStyles } from '@mantine/emotion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type React from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'usehooks-ts';
import {
  LIGHT_ADDITIONAL_COLOR,
  MAIN_COLOR,
  SHADOW,
  WHITE,
  WHITE_ADDITIONAL_COLOR,
} from '@/components/Utils/DefaultStyle';
import i18n from '@/components/Utils/i18n';
import { MyImage } from '@/components/Utils/MyImage';
import { SVG } from '@/components/Utils/Svg';

export const Header = ({
  children,
  reduced,
}: {
  children?: React.JSX.Element | undefined;
  reduced?: boolean | undefined;
}) => {
  const { classes } = useStyles();
  const pathname = usePathname();
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
              style={pathname === '/' ? { color: LIGHT_ADDITIONAL_COLOR } : {}}
            >
              {t('header.blog')}
            </div>
          </Link>
          <button
            type="button"
            key={t('header.otherLang.alt')}
            className={classes.link}
            onClick={() => {
              i18n.changeLanguage(t('header.otherLang.lang') || 'en');
              localStorage.setItem(
                'currentLanguage',
                t('header.otherLang.lang') || 'en',
              );
            }}
          >
            {t('header.switchTo')}
            {t('header.otherLang.lang') === 'en' ? (
              <SVG.FlagEn style={{ width: '2em' }} />
            ) : (
              <SVG.FlagFr style={{ width: '2em' }} />
            )}
          </button>
        </div>
      </div>
      {!!children && <div className={classes.summary}>{children}</div>}
    </div>
  );
};

const useStyles = createStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    paddingTop: 10,
    transition: 'opacity 0.3s, transform 0.3s',
    '@media (max-width: 950)': {
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
    '@media (max-width: 600)': {
      alignSelf: 'center',
      justifyContent: 'space-around',
      width: '100%',
    },
    '@media (max-width: 500)': {
      marginTop: 0,
    },
    '@media (max-width: 360)': {
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
    '@media (max-width: 600)': {
      flexDirection: 'column',
    },
  },
  link: {
    all: 'unset',
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
    '@media (max-width: 600)': {
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
    '@media (max-width: 400)': {
      alignSelf: 'center',
      animation: 'none',
      width: '80%',
    },
  },
}));
