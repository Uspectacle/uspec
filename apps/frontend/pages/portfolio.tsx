import { createStyles } from '@mantine/core';
import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React from 'react';
import { Board } from '../src/Portfolio/Board';
import { Note } from '../src/Portfolio/Note';
import { Summary } from '../src/Portfolio/Summary';
import { MyImage } from '../src/Utils/MyImage';

const Portfolio: NextPage = () => {
  const { classes } = useStyles();
  const Elements = [
    <div className={classes.title}>
      {
        "MS4'S NEEDLE SERVO-CONTROL FOR DEPTH\n2019 - MS Laboratory R&D internship"
      }
    </div>,
    <div className={classes.image}>
      {<MyImage src="/image/mslab.png" width={775} height={666} />}
    </div>,
    <div className={classes.text}>
      {
        'First real professional experience, this internship allowed me to discover in-depth the operation of a company.\nThe chance I had to be completely immersed in the role of an R&D engineer.\nThe project was to desising, building and test a board to control the sampling needle depth for their MS4 blood analyzer.\nIn autonomy for 5 weeks, I was able to provide a functional analysis report, an Eagle board, a Spice simulation, a functional prototype and a test report.'
      }
    </div>,
    <div className={classes.link}>{'Read Report'}</div>,
  ];

  return (
    <Layout summary={<Summary />}>
      <>
        <Board>
          <div className={classes.container}>
            {Elements.map((Element, index) => (
              <Note
                seed={index}
                delay={0.6 + index * 0.25}
                key={`note-${index}`}
              >
                {Element}
              </Note>
            ))}
          </div>
        </Board>
        <Board>
          <div className={classes.container}>
            {Elements.map((Element, index) => (
              <Note
                seed={20 + index}
                delay={0.6 + index * 0.25}
                key={`note-${index}`}
              >
                {Element}
              </Note>
            ))}
          </div>
        </Board>
      </>
    </Layout>
  );
};

const useStyles = createStyles(() => ({
  title: { padding: 15 },
  image: {
    width: 200,
    border: 'solid 10px white',
  },
  text: { padding: 15 },
  link: { padding: 15, fontFamily: 'Crayons', fontSize: '1.2em' },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'wrap',
    margin: 20,
  },
}));

export default Portfolio;
