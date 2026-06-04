'use client';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
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
          <FontAwesomeIcon icon={faGithub} size="lg" />
          /Uspectacle
        </Link>
      </div>
    </footer>
  );
};
