import { createStyles } from '@mantine/emotion';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useTranslation } from 'react-i18next';
import { Layout } from '../src/Layouts/Layout';
import {
  entranceAnimation,
  MAIN_COLOR,
  SHADOW,
  WHITE,
} from '../src/Utils/DefaultStyle';
import { MyImage } from '../src/Utils/MyImage';

const Page404: NextPage = () => {
  const { t } = useTranslation();
  const { classes } = useStyles();

  const router = useRouter();

  return (
    <Layout>
      <div className={classes.container}>
        <MyImage
          src="/image/404.png"
          width={125}
          height={111}
          style={{ width: 125 }}
        />
        <div>
          <br />
          <strong>{router.asPath}</strong>
          <br />
          <br />
          {t('404.text')}
        </div>
      </div>
    </Layout>
  );
};

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    boxShadow: SHADOW,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: WHITE,
    borderRadius: 10,
    maxWidth: '80%',
    overflow: 'wrap',
    strong: { color: MAIN_COLOR, wordBreak: 'break-all' },
    animation: entranceAnimation(0.1),
  },
}));

export default Page404;
