import Link from 'next/link';
import type React from 'react';
import styles from './DefaultPost.module.css';

interface Prop {
  title: string;
  text: string;
  href?: string;
  image: React.JSX.Element;
  index: number;
}

export const DefaultPost: React.ComponentType<Prop> = ({
  title,
  text,
  href = '',
  image,
}) => {
  return (
    <li key={title} className={styles.container}>
      <Link href={href} rel={'noreferrer'} className={styles.link} passHref>
        <div className={styles.image}>{image}</div>
        <div className={styles.infos}>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
        </div>
      </Link>
    </li>
  );
};
