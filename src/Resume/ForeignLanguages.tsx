import { createStyles } from '@mantine/emotion';
import { useTranslation } from 'react-i18next';
import { SHADOW } from '../Utils/DefaultStyle';
import { SVG } from '../Utils/Svg';

export const ForeignLanguages = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <ul className={classes.container}>
      <li>
        {t('resume.french.name')}
        <SVG.FlagFr style={{ height: '5em' }} />
        ★★★★★
        <br />
        {t('resume.french.level')}
      </li>
      <li>
        {t('resume.english.name')}
        <SVG.FlagEn style={{ height: '5em' }} />
        ★★★★★
        <br />
        {t('resume.english.level')}
        <br />
        <div className={classes.bonusInfo}>{t('resume.english.bonus')}</div>
      </li>
      <li>
        {t('resume.spanish.name')}
        <SVG.FlagEs style={{ height: '5em' }} />
        ★★★☆☆
        <br />
        {t('resume.spanish.level')}
      </li>
    </ul>
  );
};

const useStyles = createStyles(() => ({
  container: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'wrap',
    '& > li': {
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      boxShadow: SHADOW,
      width: 130,
      alignItems: 'center',
      padding: 5,
      borderRadius: 5,
      margin: 5,
      '@media (max-width: 500px)': {
        width: 100,
      },
    },
  },
  bonusInfo: {
    fontSize: '0.8em',
    fontStyle: 'italic',
  },
}));
