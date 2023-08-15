import { createStyles } from '@mantine/core';
import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React from 'react';
import { Board } from '../src/Portfolio/Board';
import { Note } from '../src/Portfolio/Note';

const Resume: NextPage = () => {
  const { classes } = useStyles();
  //   const { t } = useTranslation();

  const summary = (
    <>
      {
        'I have done lots of projects before this blog and I will try to list them all here. At some point, some may received there own page'
      }
    </>
  );

  return (
    <Layout summary={summary}>
      <Board>
        <div className={classes.container}>
          <Note index={0}>
            <div className={classes.text}>{'wtf la vie'}</div>
          </Note>
          <Note index={1}>
            <div className={classes.text}>{'Hello'}</div>
          </Note>
          <Note index={2}>
            <div className={classes.text}>{'Hello'}</div>
          </Note>
          <Note index={3}>
            <div className={classes.text}>{'Hello'}</div>
          </Note>
          <Note index={4}>
            <div className={classes.text}>{'Hello'}</div>
          </Note>
          <Note index={5}>
            <div className={classes.text}>{'Hello'}</div>
          </Note>
          <Note index={6}>
            <div className={classes.text}>{'Hello'}</div>
          </Note>
          <Note index={7}>
            <div className={classes.text}>{'Hello'}</div>
          </Note>
          <Note index={8}>
            <div className={classes.text}>{'Hello'}</div>
          </Note>
        </div>
      </Board>
    </Layout>
  );
};

const useStyles = createStyles(() => ({
  text: {},
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'wrap',
    width: '50vw',
    margin: 20,
  },
}));

export default Resume;
