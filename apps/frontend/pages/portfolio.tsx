import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React from 'react';
import { Board } from '../src/Portfolio/Board';
import { Summary } from '../src/Portfolio/Summary';
import { Project } from '../src/Portfolio/Project';
import { ProjectList } from '../src/Portfolio/ProjectsList';
import { useTranslation } from 'react-i18next';

const Portfolio: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout summary={<Summary />}>
      <Board>
        <>
          {ProjectList(t).map(
            ({ title, date, location, context, image, text, links }, index) => (
              <Project
                key={`project-${index}`}
                index={index}
                title={title}
                date={date}
                location={location}
                context={context}
                image={image}
                text={text}
                links={links}
              />
            )
          )}
        </>
      </Board>
    </Layout>
  );
};

export default Portfolio;
