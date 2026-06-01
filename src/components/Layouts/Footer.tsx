'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { SVG } from '@/components/Utils/Svg';

import styles from './Footer.module.css';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <strong>{t('footer.contactMe')}</strong>

      <div className={styles.links}>
        <Link
          href={'mailto:uspectacle@gmail.com'}
          target={'_blank'}
          rel={'noreferrer'}
          className={`${styles.link} ${styles.mail}`}
          passHref
        >
          uspectacle@gmail.com
        </Link>

        <Link href={'/resume'} className={styles.link}>
          {t('footer.resume')}
        </Link>

        <Link
          href={'https://github.com/Uspectacle'}
          target={'_blank'}
          rel={'noreferrer'}
          className={styles.link}
          passHref
        >
          <SVG.Github className={styles.logo} />
          /Uspectacle
        </Link>
      </div>
    </footer>
  );
};
