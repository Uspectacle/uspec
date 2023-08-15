import { createStyles } from '@mantine/core';
import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React from 'react';
import { Board } from '../src/Portfolio/Board';
import { Note } from '../src/Portfolio/Note';
import { Summary } from '../src/Portfolio/Summary';

const Resume: NextPage = () => {
  const { classes } = useStyles();
  const Elements = [
    <div className={classes.text}>{'wtf la vie'}</div>,
    <div className={classes.text}>{'wtf la vie'}</div>,
    <div className={classes.text}>{'wtf la vie'}</div>,
    <div className={classes.text}>{'wtf la vie'}</div>,
    <div className={classes.text}>{'wtf la vie'}</div>,
    <div className={classes.text}>{'wtf la vie'}</div>,
    <div className={classes.text}>{'wtf la vie'}</div>,
    <div className={classes.text}>{'wtf la vie'}</div>,
    <div className={classes.text}>{'wtf la vie'}</div>,
  ];

  return (
    <Layout summary={<Summary />}>
      <Board>
        <div className={classes.container}>
          {Elements.map((Element, index) => (
            <Note index={index} key={`note-${index}`}>
              {Element}
            </Note>
          ))}
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
