import { createStyles } from '@mantine/emotion';
import Link from 'next/link';

import { useTranslation } from 'react-i18next';
import {
  LIGHT_ADDITIONAL_COLOR,
  MAIN_COLOR,
  SHADOW,
  WHITE,
} from '../Utils/DefaultStyle';
import { SVG } from '../Utils/Svg';

export const Footer = ({ reduced }: { reduced?: boolean | undefined }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <footer
      className={classes.footer}
      style={
        reduced
          ? {
              opacity: 0,
              transform: 'translateY(100%)',
            }
          : {}
      }
    >
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
            <SVG.Github style={{ width: '1.2em', height: '1.2em' }} />
            /Uspectacle
          </div>
        </Link>
      </div>
    </footer>
  );
};

const useStyles = createStyles(() => ({
  footer: {
    position: 'relative',
    left: 0,
    bottom: 0,
    width: '100%',
    background: MAIN_COLOR,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    color: LIGHT_ADDITIONAL_COLOR,
    transition: 'opacity 0.3s, transform 0.3s',
    paddingTop: 10,
    paddingBottom: 10,
    '@media (max-width: 400px)': {
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
    '@media (max-width: 700px)': {
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
    '@media (max-width: 600px)': {
      padding: 5,
      width: '12em',
    },
  },
}));
