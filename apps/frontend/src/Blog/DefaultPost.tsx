import { createStyles } from '@mantine/core';
import React from 'react';
import Link from 'next/link';
import {
  WHITE,
  SHADOW,
  MAIN_COLOR,
  LIGHT_ADDITIONAL_COLOR,
  entranceAnimation,
} from '../Utils/DefaultStyle';

interface Prop {
  title: string;
  text: string;
  href: string;
  image: React.JSX.Element;
  index: number;
}

export const DefaultPost = ({ title, text, href, image, index }: Prop) => {
  const { classes } = useStyles({ index });

  return (
    <li key={`post-${index}`} className={classes.container}>
      <Link href={href} rel={'noreferrer'} className={classes.link} passHref>
        <div className={classes.image}>{image}</div>
        <div className={classes.infos}>
          <div className={classes.title}>{title}</div>
          <div className={classes.text}>{text}</div>
        </div>
      </Link>
    </li>
  );
};

const useStyles = createStyles((theme, { index }: { index: number }) => ({
  container: {
    animation: entranceAnimation(index * 0.25),
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    boxShadow: SHADOW,
    height: 130,
    width: '30em',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    backgroundColor: LIGHT_ADDITIONAL_COLOR,
    borderRadius: 10,
    overflow: 'hidden',
    [theme.fn.smallerThan(550)]: {
      width: '95%',
      marginRight: 0,
      marginLeft: 0,
    },
    [theme.fn.smallerThan(420)]: {
      height: 'auto',
    },
    '&:active': {
      boxShadow: 'none',
    },
  },
  link: {
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
    color: MAIN_COLOR,
  },
  text: {
    fontSize: '0.8em',
    marginTop: '1.5em',
    textAlign: 'justify',
    alignSelf: 'start',
  },
}));
