import type React from 'react';
import { mulberry32, pick } from '@/utils/random';
import styles from './Note.module.css';

interface Props {
  seed?: number;
  children?: React.JSX.Element | undefined;
  actionable?: boolean | undefined;
}

const noteColors = ['#f1f58f', '#ffa930', '#ff78cb', '#a9edf1', '#74ed4b'];
const pinColors = ['#e4cb2e', '#1b835f', '#db2a21', '#4141e7', '#e4dbd2'];

export const Note = ({ seed, children, actionable }: Props) => {
  const random = seed ? mulberry32(seed) : Math.random;
  const noteDelay = `${-random() * 100}s`;
  const noteRotate = (random() - 0.5) / 40;
  const noteTranslate = `translate(${(random() - 0.5) * 1.5}em, ${
    (random() - 0.5) * 1.5
  }em)`;
  const noteTransform = `rotate(${noteRotate}turn) ${noteTranslate}`;
  const noteTransformHover = `rotate(${noteRotate / 3}turn) ${noteTranslate}`;
  const pinTransform = `translate(${(random() - 0.5) * 200 - 50}%, ${
    (random() - 0.5) * 50
  }%)`;
  const pinColor = pick(pinColors, random());
  const shadowPosition = `${(random() - 0.5) * 8}px ${random() * 4}px`;

  return (
    <div
      className={styles.container}
      style={
        {
          '--note-bg': pick(noteColors, random()),
          '--note-transform': noteTransform,
          '--note-delay': noteDelay,
          '--note-transform-hover': noteTransformHover,
          '--pin-transform': pinTransform,
          '--pin-color': pinColor,
          '--pin-shadow': `${shadowPosition} 2px 0.5px rgba(0, 0, 0, 0.4), ${shadowPosition} 0px 1.5px ${pinColor}, ${shadowPosition} 3px 2px rgba(0, 0, 0, 0.2)`,
        } as React.CSSProperties
      }
    >
      <div className={`${styles.note} ${actionable && styles.actionable}`}>
        <div className={styles.pin} />
        {children}
      </div>
    </div>
  );
};
