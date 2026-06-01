import Link from 'next/link';
import type React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PastElement.module.css';

interface Props {
  href: string;
  image: React.JSX.Element;
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
  const { t } = useTranslation();

  return (
    <li className={styles.container}>
      <Link
        href={href}
        target={'_blank'}
        rel={'noreferrer'}
        className={styles.link}
        passHref
      >
        <div className={styles.image}>{image}</div>
        <div className={styles.infos}>
          <div className={styles.years}>{years}</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.subName}>{subName}</div>
          <div className={styles.city}>{city}</div>
        </div>
      </Link>
      <div className={styles.text}>
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
