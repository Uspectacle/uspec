import { useTranslation } from 'react-i18next';
import { SVG } from '@/components/Utils/Svg';
import styles from './ForeignLanguages.module.css';

export const ForeignLanguages = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.container}>
      <li>
        {t('resume.french.name')}
        <SVG.FlagFr className={styles.flag} />
        ★★★★★
        <br />
        {t('resume.french.level')}
      </li>
      <li>
        {t('resume.english.name')}
        <SVG.FlagEn className={styles.flag} />
        ★★★★★
        <br />
        {t('resume.english.level')}
        <br />
        <div className={styles.bonusInfo}>{t('resume.english.bonus')}</div>
      </li>
      <li>
        {t('resume.spanish.name')}
        <SVG.FlagEs className={styles.flag} />
        ★★★☆☆
        <br />
        {t('resume.spanish.level')}
      </li>
    </ul>
  );
};
