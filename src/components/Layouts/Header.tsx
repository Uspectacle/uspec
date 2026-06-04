'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/utils/i18n';
import styles from './Header.module.css';

export const Header = ({
  children,
}: {
  children?: React.JSX.Element | undefined;
}) => {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/image/logo.png"
            alt="USPEC"
            width={201}
            height={154}
            loading="eager"
          />
        </Link>

        <div className={styles.links}>
          <Link href="/" className={styles.link} passHref>
            <div className={pathname === '/' ? styles.linkActive : undefined}>
              {t('header.blog')}
            </div>
          </Link>

          <button
            type="button"
            key={t('header.otherLang.alt')}
            className={styles.link}
            onClick={() => {
              i18n.changeLanguage(t('header.otherLang.lang') || 'en');
              localStorage.setItem(
                'currentLanguage',
                t('header.otherLang.lang') || 'en',
              );
            }}
          >
            {t('header.switchTo')}
            <div className={styles.flag}>
              {t('header.otherLang.lang') === 'fr' ? (
                <Image
                  src="/image/fr.svg"
                  alt="fr"
                  className={styles.flag}
                  width={1000}
                  height={1000}
                />
              ) : (
                <Image
                  src="/image/en.svg"
                  alt="en"
                  className={styles.flag}
                  width={1000}
                  height={1000}
                />
              )}
            </div>
          </button>
        </div>
      </div>

      {!!children && <div className={styles.summary}>{children}</div>}
    </div>
  );
};
