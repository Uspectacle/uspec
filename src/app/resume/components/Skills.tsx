'use client';

import { useTranslation } from 'react-i18next';
import { RotatingWords } from './RotatingWords';

export const Skills = () => {
  const { t } = useTranslation();
  const skillsList = [
    // AI & Data
    t('resume.skill.deep-learning'),
    t('resume.skill.machine-learning'),
    t('resume.skill.computer-vision'),
    t('resume.skill.signal-processing'),
    t('resume.skill.image-processing'),
    t('resume.skill.audio-processing'),
    t('resume.skill.video-processing'),
    t('resume.skill.optimization'),
    t('resume.skill.noise-reduction'),
    t('resume.skill.telecommunication'),
    // Engineering
    t('resume.skill.chip-design'),
    t('resume.skill.schematic-design'),
    // Software & Dev
    t('resume.skill.web-development'),
    t('resume.skill.mobile-development'),
    t('resume.skill.app-deployment'),
    t('resume.skill.database-handling'),
    t('resume.skill.dev-ops'),
    t('resume.skill.rest-api-design'),
    // Methodology & Management
    t('resume.skill.agile-methods'),
    t('resume.skill.managing-a-project'),
    t('resume.skill.team-management'),
    t('resume.skill.scientific-publication'),
    t('resume.skill.test-coverage-and-qa'),
    t('resume.skill.advanced-git-workflows'),
    t('resume.skill.ai-implementation'),
    t('resume.skill.data-analysis'),
    t('resume.skill.technical-documentation'),
    t('resume.skill.technical-presentation'),
    t('resume.skill.geolocation-systems'),
    t('resume.skill.networks-protocols'),
  ];

  return <RotatingWords words={skillsList} />;
};
