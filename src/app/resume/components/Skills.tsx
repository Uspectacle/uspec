'use client';

import { useTranslation } from 'react-i18next';
import { shuffle } from '@/components/Utils/random';
import { RotatingWords } from './RotatingWords';

export const Skills = () => {
  const { t } = useTranslation();
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
    t('resume.skill.optimization'),
    t('resume.skill.noise-reduction'),
    t('resume.skill.database-handling'),
    t('resume.skill.git-handling'),
    t('resume.skill.web-development'),
    t('resume.skill.mobile-development'),
    t('resume.skill.agile-methods'),
    t('resume.skill.managing-a-project'),
    t('resume.skill.app-deployment'),
  ];

  return <RotatingWords words={shuffle(skillsList)} />;
};
