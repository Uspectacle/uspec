'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/Layouts/Layout';
import { mulberry32, shuffle } from '@/utils/random';
import { Board } from './components/Board';
import { Project } from './components/Project';
import { ProjectList } from './components/ProjectsList';
import { Summary } from './Summary';

const Portfolio: NextPage = () => {
  const { t } = useTranslation();

  const [seed, setSeed] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setSeed(Math.random());
  }, []);

  const isReady = isMounted && seed !== null;
  const random = seed ? mulberry32(seed) : Math.random;

  return (
    <Layout summary={<Summary />}>
      {isReady ? (
        <Board>
          {shuffle(ProjectList(t), random()).map(
            ({ title, date, location, context, image, text, links }) => (
              <Project
                key={`${title}-${date}`}
                seed={random()}
                title={title}
                date={date}
                location={location}
                context={context}
                image={image}
                text={text}
                links={links}
              />
            ),
          )}
        </Board>
      ) : undefined}
    </Layout>
  );
};

export default Portfolio;
