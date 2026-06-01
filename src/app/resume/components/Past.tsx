import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './Past.module.css';
import { PastElement } from './PastElement';

export const Education = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.container}>
      <PastElement
        href={t('resume.ensea.href')}
        image={
          <Image
            src="/image/Resume/ensea.png"
            alt="ensea"
            width={120}
            height={119}
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
          <Image
            src="/image/Resume/civ.png"
            alt="civ"
            width={202}
            height={69}
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
          <Image
            src="/image/Resume/parc.png"
            alt="parc"
            width={475}
            height={106}
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
  const { t } = useTranslation();

  return (
    <ul className={styles.container}>
      <PastElement
        href={'https://galadrim.fr/'}
        image={
          <Image
            src="/image/Resume/galadrim.png"
            alt="galadrim"
            width={200}
            height={200}
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
          <Image
            src="/image/Resume/cea.jpg"
            alt="cea"
            width={400}
            height={400}
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
          <Image
            src="/image/Resume/Uni-ljubljana.png"
            alt="Uni-ljubljana"
            width={220}
            height={219}
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
          <Image
            src="/image/Resume/ensea.png"
            alt="ensea"
            width={120}
            height={119}
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
