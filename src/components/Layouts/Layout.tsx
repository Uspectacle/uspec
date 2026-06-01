'use client';

import { createStyles } from '@mantine/emotion';
import type React from 'react';
import { Background } from './Background';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({
  summary,
  children,
  backgroundTag,
  reduced,
}: {
  summary?: React.JSX.Element | undefined;
  children?: React.JSX.Element | undefined;
  backgroundTag?: string | undefined;
  reduced?: boolean | undefined;
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Background length={20} tag={backgroundTag} />
      <Header reduced={reduced}>{summary}</Header>
      {children}
      <Footer reduced={reduced} />
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100dvh',
    justifyContent: 'space-between',
    whiteSpace: 'pre-wrap',
    alignItems: 'center',
    overflow: 'hidden',
    '@media (max-width: 500)': {
      fontSize: '0.9em',
    },
    '@media (max-width: 350)': {
      fontSize: '0.8em',
    },
  },
}));
