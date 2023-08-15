import { createStyles } from '@mantine/core';
import React from 'react';
import Link from 'next/link';
import { WHITE, SHADOW, PURPLE_INTENSE } from '../../utils/DefaultStyle';

interface PostProp {
  title: string;
  text: string;
  href: string;
  image: React.JSX.Element;
}

export const Post = ({ title, text, href, image }: PostProp) => {
  const { classes } = useStyles();

  return (
    <Link href={href} rel={'noreferrer'} className={classes.container} passHref>
      <div className={classes.image}>{image}</div>
      <div className={classes.infos}>
        <div className={classes.title}>{title}</div>
        <div className={classes.text}>{text}</div>
      </div>
    </Link>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    height: '100%',
    width: '100%',
    backgroundColor: WHITE,
    opacity: 1,
    transition: 'opacity 0.3s',
    color: 'black',
    [theme.fn.smallerThan(420)]: {
      flexDirection: 'column',
    },
    '&:hover': {
      opacity: 0.9,
    },
    animation: 'parent',
  },
  image: {
    aspectRatio: '1',
    height: '100%',
    [theme.fn.smallerThan(420)]: {
      height: 'auto',
      width: '50%',
      boxShadow: SHADOW,
    },
  },
  infos: {
    boxSizing: 'border-box',
    padding: 10,
    height: '100%',
    width: '100%',
    justifyContent: 'start',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.fn.smallerThan(420)]: {
      height: 'auto',
    },
  },
  title: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: PURPLE_INTENSE,
  },
  text: {
    fontSize: '0.8em',
    marginTop: '1.5em',
    textAlign: 'justify',
    alignSelf: 'start',
  },
}));
