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
        years={t('2018-2022')}
        name={t('resume.ensea.name')}
        subName={t('resume.ensea.subName')}
        city={t('resume.ensea.city')}
        text={t('resume.ensea.text')}
      />
      <PastElement
        href={t('website-civ')}
        image={
          <Image
            src="/image/Resume/civ.png"
            alt="civ"
            width={202}
            height={69}
          />
        }
        years={t('2016-2018')}
        name={t('resume.civ.name')}
        subName={t('resume.civ.subName')}
        city={t('resume.civ.city')}
        text={t('resume.civ.text')}
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
        years={t('2013-2016')}
        name={t('resume.parc.name')}
        subName={t('resume.parc.subName')}
        city={t('resume.parc.city')}
        text={t('resume.parc.text')}
      />
    </ul>
  );
};

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.container}>
      <PastElement
        href={t('resume.intersec.href')}
        image={
          <Image
            src="/image/Resume/intersec.png"
            alt="intersec"
            width={200}
            height={200}
          />
        }
        years={t('2023-2025')}
        name={t('resume.intersec.name')}
        subName={t('resume.intersec.subName')}
        city={t('resume.intersec.city')}
        text={t('resume.intersec.text')}
      />
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
        years={t('2022-2023')}
        name={t('resume.galadrim.name')}
        subName={t('resume.galadrim.subName')}
        city={t('resume.galadrim.city')}
        text={t('resume.galadrim.text')}
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
        text={t('resume.cea.text')}
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
        text={t('resume.ljubljana.text')}
      />
    </ul>
  );
};
