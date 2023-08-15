import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RotatingWords } from './RotatingWords';
import i18n from 'apps/frontend/utils/i18n';

export const Skills = () => {
  const { t } = useTranslation();

  const [skills, setSkills] = useState<string[]>([]);

  const skillsList = [
    t('resume.skill.deep-learning'),
    t('resume.skill.machine-learning'),
    t('resume.skill.chip-design'),
    t('resume.skill.schematic-design'),
    t('resume.skill.image-processing'),
    t('resume.skill.audio-processing'),
    t('resume.skill.signal-processing'),
    t('resume.skill.video-processing'),
    t('resume.skill.telecommunication'),
    t('resume.skill.modeling-languages'),
    t('resume.skill.optimization'),
    t('resume.skill.noise-reduction'),
    t('resume.skill.database-handling'),
    t('resume.skill.git-handling'),
    t('resume.skill.web-development'),
    t('resume.skill.mobile-development'),
    t('resume.skill.agile-methods'),
    t('resume.skill.managing-a-team'),
    t('resume.skill.managing-a-project'),
    t('resume.skill.app-deployment'),
  ];

  useEffect(() => {
    setSkills(skillsList.sort(() => Math.random() - 0.5));
  }, [i18n.language]);

  return <RotatingWords text={t('resume.skill.i-am-good-at')} words={skills} />;
};
