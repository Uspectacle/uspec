import { createStyles } from '@mantine/core';
import React from 'react';
import { Note } from './Note';
import Link from 'next/link';

export interface ProjectProps {
  title: string;
  date: string;
  location?: string | undefined;
  context: string;
  image: JSX.Element;
  text?: string | undefined;
  links: {
    link: string;
    href: string;
  }[];
}

export const Project = ({
  title,
  date,
  location,
  context,
  image,
  text,
  links,
  index,
}: ProjectProps & { index: number }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.subContainer}>
          <Note seed={2 + 100 * index}>
            <div className={classes.date}>{date}</div>
          </Note>
          {!!location && (
            <Note seed={3 + 100 * index}>
              <div className={classes.location}>{location}</div>
            </Note>
          )}
          <Note seed={4 + 100 * index} margin={15}>
            <div className={classes.context}>{context}</div>
          </Note>
        </div>
        <Note seed={1 + 100 * index} margin={15}>
          <div className={classes.title}>{title}</div>
        </Note>
      </div>
      <Note seed={5 + 100 * index} margin={15}>
        <div className={classes.image}>{image}</div>
      </Note>
      {!!text && (
        <Note seed={6 + 100 * index}>
          <div className={classes.text}>{text}</div>
        </Note>
      )}
      {links.map(({ link, href }, linkIndex) => (
        <Note
          seed={7 + linkIndex + 100 * index}
          actionable
          key={`link-note-${linkIndex}`}
        >
          <div className={classes.linkContainer}>
            <Link
              href={href}
              target={'_blank'}
              rel={'noreferrer'}
              passHref
              className={classes.link}
            >
              {link}
            </Link>
          </div>
        </Note>
      ))}
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    flexFlow: 'wrap',
    margin: 20,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexFlow: 'wrap',
    alignItems: 'center',
  },
  title: {
    padding: 15,
    fontSize: '1.2em',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  date: { padding: 15, textAlign: 'center' },
  location: { padding: 15, textAlign: 'center' },
  context: { padding: 15, fontWeight: 'bold', textAlign: 'center' },
  image: {
    height: '15em',
    border: 'solid 10px white',
  },
  text: { padding: 15 },
  linkContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  link: {
    fontFamily: 'Crayons',
    fontSize: '1.2em',
    textDecoration: 'none',
    color: 'black',
    padding: 15,
  },
}));
