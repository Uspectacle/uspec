'use client';

import type React from 'react';
import { Background } from './Background';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Layout.module.css';

export const Layout = ({
  summary,
  children,
}: {
  summary?: React.JSX.Element | undefined;
  children?: React.JSX.Element | undefined;
}) => {
  return (
    <div className={styles.container}>
      <Background length={20} />
      <Header>{summary}</Header>
      {children}
      <Footer />
    </div>
  );
};
