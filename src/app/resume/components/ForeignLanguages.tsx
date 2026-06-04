import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './ForeignLanguages.module.css';

export const ForeignLanguages = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.container}>
      <li>
        {t('resume.french.name')}
        <Image
          src="image/fr.svg"
          alt="fr"
          className={styles.flag}
          width={1000}
          height={1000}
        />
        ★★★★★
        <br />
        {t('resume.french.level')}
      </li>
      <li>
        {t('resume.english.name')}
        <Image
          src="image/en.svg"
          alt="en"
          className={styles.flag}
          width={1000}
          height={1000}
        />
        ★★★★★
        <br />
        {t('resume.english.level')}
        <br />
        <div className={styles.bonusInfo}>{t('resume.english.bonus')}</div>
      </li>
      <li>
        {t('resume.spanish.name')}
        <Image
          src="image/sp.svg"
          alt="sp"
          className={styles.flag}
          width={1000}
          height={1000}
        />
        ★★★☆☆
        <br />
        {t('resume.spanish.level')}
      </li>
    </ul>
  );
};
