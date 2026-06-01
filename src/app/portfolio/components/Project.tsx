import { createStyles } from '@mantine/emotion';
import Link from 'next/link';
import type React from 'react';
import { mulberry32 } from '@/components/Utils/random';
import { Note } from './Note';

export interface ProjectProps {
  seed?: number;
  title: string;
  date: string;
  location?: string | undefined;
  context: string;
  image: React.JSX.Element;
  text?: string | undefined;
  links: {
    link: string;
    href: string;
  }[];
}

export const Project = ({
  seed,
  title,
  date,
  location,
  context,
  image,
  text,
  links,
}: ProjectProps) => {
  const { classes } = useStyles();

  const random = seed ? mulberry32(seed) : Math.random;

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.subContainer}>
          <Note seed={random()}>
            <div className={classes.date}>{date}</div>
          </Note>
          {!!location && (
            <Note seed={random()}>
              <div className={classes.location}>{location}</div>
            </Note>
          )}
          <Note seed={random()} margin={15}>
            <div className={classes.context}>{context}</div>
          </Note>
        </div>
        <Note seed={random()} margin={15}>
          <div className={classes.title}>{title}</div>
        </Note>
      </div>
      <Note seed={random()} margin={15}>
        <div className={classes.image}>{image}</div>
      </Note>
      {!!text && (
        <Note seed={random()}>
          <div className={classes.text}>{text}</div>
        </Note>
      )}
      {links.map(({ link, href }) => (
        <Note seed={random()} actionable key={link}>
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
    maxWidth: '80vw',
    overflow: 'hidden',
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
