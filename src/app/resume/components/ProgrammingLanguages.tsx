import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './ProgrammingLanguages.module.css';

export const ProgrammingLanguages = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.container}>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/python.png"
            alt="python"
            width={935}
            height={1024}
          />
        </div>
        {t('resume.skill.python')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/matlab.png"
            alt="matlab"
            width={897}
            height={806}
          />
        </div>
        {t('resume.skill.matlab')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/java.png"
            alt="java"
            width={512}
            height={512}
          />
        </div>
        {t('resume.skill.java')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/js.png"
            alt="js"
            width={1052}
            height={1052}
          />
        </div>
        {t('resume.skill.JavaScript')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/html.png"
            alt="html"
            width={512}
            height={512}
          />
        </div>
        {t('resume.skill.HTML')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/css.png"
            alt="css"
            width={800}
            height={800}
          />
        </div>
        {t('resume.skill.CSS')}
      </li>
      <li>
        <div className={styles.image}>
          <Image src="/image/Resume/c.png" alt="c" width={360} height={405} />
        </div>
        {t('resume.skill.C')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/csharp.png"
            alt="csharp"
            width={1200}
            height={1350}
          />
        </div>
        {t('resume.skill.Csharp')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/vhdl.png"
            alt="vhdl"
            width={128}
            height={128}
          />
        </div>
        {t('resume.skill.VHDL')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/bash.png"
            alt="bash"
            width={2048}
            height={2048}
          />
        </div>
        {t('resume.skill.bash-unix')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/mathematica.png"
            alt="mathematica"
            width={1965}
            height={2048}
          />
        </div>
        {t('resume.skill.mathematica')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/assembly.png"
            alt="assembly"
            width={512}
            height={512}
          />
        </div>
        {t('resume.skill.assembly')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/react.png"
            alt="react"
            width={2300}
            height={2000}
          />
        </div>
        {t('resume.skill.react')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/reactnative.png"
            alt="reactnative"
            width={256}
            height={300}
          />
        </div>
        {t('resume.skill.react-native')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/aws.png"
            alt="aws"
            width={1024}
            height={613}
          />
        </div>
        {t('resume.skill.aws-console')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/ts.png"
            alt="ts"
            width={2048}
            height={2048}
          />
        </div>
        {t('resume.skill.TypeScript')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/sql.png"
            alt="sql"
            width={320}
            height={394}
          />
        </div>
        {t('resume.skill.SQL')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/docker.png"
            alt="docker"
            width={256}
            height={256}
          />
        </div>
        {t('resume.skill.docker')}
      </li>
      <li>
        <div className={styles.image}>
          <Image
            src="/image/Resume/excel.png"
            alt="excel"
            width={1101}
            height={1024}
          />
        </div>
        {t('resume.skill.excel')}
      </li>
    </ul>
  );
};
