import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { SVG } from '@/components/Utils/Svg';
import styles from './Summary.module.css';

export const Summary = () => {
  const { t } = useTranslation();
  return (
    <>
      {t('resume.summary')} <br /> <br />
      <Link
        href={t('resume.pdf')}
        target={'_blank'}
        rel={'noreferrer'}
        className={styles.button}
        passHref
      >
        <SVG.Pdf className={styles.pdf} />
        &nbsp;{t('resume.downloadAsPDF')}
      </Link>
    </>
  );
};
