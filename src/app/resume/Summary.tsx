import { createStyles } from '@mantine/emotion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { MAIN_COLOR, SHADOW, WHITE } from '@/components/Utils/DefaultStyle';
import { SVG } from '@/components/Utils/Svg';

export const Summary = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  return (
    <>
      {t('resume.summary')} <br /> <br />
      <Link
        href={t('resume.pdf')}
        target={'_blank'}
        rel={'noreferrer'}
        className={classes.button}
        passHref
      >
        <SVG.Pdf style={{ width: '1.2em' }} />
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
    color: MAIN_COLOR,
  },
}));
