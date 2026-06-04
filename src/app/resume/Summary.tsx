import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
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
        <FontAwesomeIcon icon={faFilePdf} size="lg" />
        &nbsp;{t('resume.downloadAsPDF')}
      </Link>
    </>
  );
};
