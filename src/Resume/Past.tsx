import { createStyles } from '@mantine/emotion';
import { useTranslation } from 'react-i18next';
import { MyImage } from '../Utils/MyImage';
import { PastElement } from './PastElement';

export const Education = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <ul className={classes.container}>
      <PastElement
        href={t('resume.ensea.href')}
        image={
          <MyImage
            src="/image/Resume/ensea.png"
            width={120}
            height={119}
            style={imageStyle}
          />
        }
        years={'2018 - 2022'}
        name={t('resume.ensea.name')}
        subName={t('resume.ensea.subName')}
        city={t('resume.ensea.city')}
        text={t('resume.ensea.text')}
        result={t('resume.ensea.result')}
      />
      <PastElement
        href={'http://prepa.civfrance.com/prépas-scientifiques/'}
        image={
          <MyImage
            src="/image/Resume/civ.png"
            width={202}
            height={69}
            style={imageStyle}
          />
        }
        years={'2016 - 2018'}
        name={t('resume.civ.name')}
        subName={t('resume.civ.subName')}
        city={t('resume.civ.city')}
        text={t('resume.civ.text')}
        result={t('resume.civ.result')}
      />
      <PastElement
        href={'https://www.leparcimperial.fr/lycee/'}
        image={
          <MyImage
            src="/image/Resume/parc.png"
            width={475}
            height={106}
            style={imageStyle}
          />
        }
        years={'2013 - 2016'}
        name={t('resume.parc.name')}
        subName={t('resume.parc.subName')}
        city={t('resume.parc.city')}
        result={t('resume.parc.result')}
      />
    </ul>
  );
};

export const Experience = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <ul className={classes.container}>
      <PastElement
        href={'https://galadrim.fr/'}
        image={
          <MyImage
            src="/image/Resume/galadrim.png"
            width={200}
            height={200}
            style={imageStyle}
          />
        }
        years={'2022 - 2023'}
        name={t('resume.galadrim.name')}
        subName={t('resume.galadrim.subName')}
        city={t('resume.galadrim.city')}
        activity={t('resume.galadrim.activity')}
        result={t('resume.galadrim.result')}
      />
      <PastElement
        href={t('resume.cea.href')}
        image={
          <MyImage
            src="/image/Resume/cea.jpg"
            width={400}
            height={400}
            style={imageStyle}
          />
        }
        years={'2021'}
        name={t('resume.cea.name')}
        subName={t('resume.cea.subName')}
        city={t('resume.cea.city')}
        objective={t('resume.cea.objective')}
        result={t('resume.cea.result')}
      />
      <PastElement
        href={'https://www.uni-lj.si/eng/'}
        image={
          <MyImage
            src="/image/Resume/Uni-ljubljana.png"
            width={220}
            height={219}
            style={imageStyle}
          />
        }
        years={'2020'}
        name={t('resume.ljubljana.name')}
        subName={t('resume.ljubljana.subName')}
        city={t('resume.ljubljana.city')}
        objective={t('resume.ljubljana.objective')}
        result={t('resume.ljubljana.result')}
      />
      <PastElement
        href={'http://www-reynal.ensea.fr/?page_id=303'}
        image={
          <MyImage
            src="/image/Resume/ensea.png"
            width={120}
            height={119}
            style={imageStyle}
          />
        }
        years={'2019 - 2020'}
        name={t('resume.themis.name')}
        subName={t('resume.themis.subName')}
        city={t('resume.themis.city')}
        text={t('resume.themis.text')}
        objective={t('resume.themis.objective')}
        result={t('resume.themis.result')}
      />
    </ul>
  );
};

const imageStyle = { width: '5em' };

const useStyles = createStyles(() => ({
  container: {
    listStyleType: 'none',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
}));
