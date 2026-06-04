import Link from 'next/link';
import type React from 'react';
import { mulberry32 } from '@/utils/random';
import { Note } from './Note';
import styles from './Project.module.css';

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
  const classes = styles;

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
          <Note seed={random()}>
            <div className={classes.context}>{context}</div>
          </Note>
        </div>
        <Note seed={random()}>
          <div className={classes.title}>{title}</div>
        </Note>
      </div>
      <Note seed={random()}>
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
