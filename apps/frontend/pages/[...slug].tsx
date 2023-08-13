// import { createStyles } from '@mantine/core'
import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { MyImage } from '../src/Utils/MyImage';
import { createStyles } from '@mantine/core';
import { PURPLE_INTENSE, SHADOW, WHITE } from '../utils/DefaultStyle';

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
    strong: { color: PURPLE_INTENSE, wordBreak: 'break-all' },
  },
}));

export default Page404;
