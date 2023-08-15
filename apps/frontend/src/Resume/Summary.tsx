import Link from 'next/link';
import { MyImage } from '../Utils/MyImage';
import { createStyles } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { SHADOW, WHITE } from '../Utils/DefaultStyle';

export const Summary = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  return (
    <>
      {t('resume.summary')} <br /> <br />
      <Link
        download={t('resume.pdf')}
        href={`doc/${t('resume.pdf')}`}
        target={'_blank'}
        rel={'noreferrer'}
        className={classes.button}
        passHref
      >
        <MyImage
          src="/svg/pdf.svg"
          width={800}
          height={800}
          style={{ width: '1.2em' }}
        />
        &nbsp;{t('resume.downloadAsPDF')}
      </Link>
    </>
  );
};
const useStyles = createStyles(() => ({
  button: {
    alignSelf: 'flex-start',
    boxShadow: SHADOW,
    padding: 10,
    textDecoration: 'none',
    fontSize: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    borderRadius: 10,
    backgroundColor: WHITE,
  },
}));
