import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { Layout } from '../src/Layouts/Layout';
import { Board } from '../src/Portfolio/Board';
import { Project } from '../src/Portfolio/Project';
import { ProjectList } from '../src/Portfolio/ProjectsList';
import { Summary } from '../src/Portfolio/Summary';

const Portfolio: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout summary={<Summary />}>
      <Board>
        {ProjectList(t).map(
          ({ title, date, location, context, image, text, links }, index) => (
            <Project
              key={`${title}-${date}`}
              index={index}
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
    </Layout>
  );
};

export default Portfolio;
