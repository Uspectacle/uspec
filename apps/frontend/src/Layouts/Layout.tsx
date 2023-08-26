import { Footer } from './Footer';
import { Header } from './Header';
import { createStyles } from '@mantine/core';
import React from 'react';
import { Background } from './Background';

export const Layout = ({
  summary,
  children,
  backgroundStyle,
  reduced,
}: {
  summary?: JSX.Element | undefined;
  children?: JSX.Element | undefined;
  backgroundStyle?: React.CSSProperties | undefined;
  reduced?: boolean | undefined;
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Background length={20} style={backgroundStyle} />
      <Header reduced={reduced}>{summary}</Header>
      {children}
      <Footer reduced={reduced} />
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100dvh',
    justifyContent: 'space-between',
    whiteSpace: 'pre-wrap',
    alignItems: 'center',
    overflow: 'hidden',
    [theme.fn.smallerThan(500)]: {
      fontSize: '0.9em',
    },
    [theme.fn.smallerThan(350)]: {
      fontSize: '0.8em',
    },
  },
}));
