import { useTranslation } from 'react-i18next';

export const Summary = () => {
  const { t } = useTranslation();
  return <>{t('minesweeper.summary')}</>;
};
