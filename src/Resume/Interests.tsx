import { createStyles } from '@mantine/emotion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MAIN_COLOR } from '../Utils/DefaultStyle';

export const Interests = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const interestRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={classes.container} ref={interestRef}>
      {t('resume.interestText')}
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    strong: { color: MAIN_COLOR },
    span: { fontWeight: 500 },
  },
}));
