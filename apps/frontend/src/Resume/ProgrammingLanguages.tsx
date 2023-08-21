import { createStyles } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MyImage } from '../Utils/MyImage';
import { SHADOW } from '../Utils/DefaultStyle';

export const ProgrammingLanguages = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <ul className={classes.container}>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/python.png" width={935} height={1024} />
        </div>
        {t('resume.skill.python')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/matlab.png" width={897} height={806} />
        </div>
        {t('resume.skill.matlab')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/java.png" width={512} height={512} />
        </div>
        {t('resume.skill.java')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/js.png" width={1052} height={1052} />
        </div>
        {t('resume.skill.JavaScript')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/html.png" width={512} height={512} />
        </div>
        {t('resume.skill.HTML')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/css.png" width={800} height={800} />
        </div>
        {t('resume.skill.CSS')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/c.png" width={360} height={405} />
        </div>
        {t('resume.skill.C')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/csharp.png" width={1200} height={1350} />
        </div>
        {t('resume.skill.Csharp')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/vhdl.png" width={128} height={128} />
        </div>
        {t('resume.skill.VHDL')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/bash.png" width={2048} height={2048} />
        </div>
        {t('resume.skill.bash-unix')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage
            src="/image/Resume/mathematica.png"
            width={1965}
            height={2048}
          />
        </div>
        {t('resume.skill.mathematica')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/assembly.png" width={512} height={512} />
        </div>
        {t('resume.skill.assembly')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/react.png" width={2300} height={2000} />
        </div>
        {t('resume.skill.react')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage
            src="/image/Resume/reactnative.png"
            width={256}
            height={300}
          />
        </div>
        {t('resume.skill.react-native')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/aws.png" width={1024} height={613} />
        </div>
        {t('resume.skill.aws-console')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/ts.png" width={2048} height={2048} />
        </div>
        {t('resume.skill.TypeScript')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/sql.png" width={320} height={394} />
        </div>
        {t('resume.skill.SQL')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/docker.png" width={256} height={256} />
        </div>
        {t('resume.skill.docker')}
      </li>
      <li>
        <div className={classes.image}>
          <MyImage src="/image/Resume/excel.png" width={1101} height={1024} />
        </div>
        {t('resume.skill.excel')}
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
      width: 100,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
      borderRadius: 5,
      margin: 5,
      fontSize: '0.9em',
    },
  },
  image: {
    display: 'flex',
    height: '4em',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    aspectRatio: '1',
  },
}));
