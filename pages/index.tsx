import { createStyles } from '@mantine/emotion';
import type { NextPage } from 'next';
import { UpcomingPost } from '../src/Blog/UpcomingPost';
import { Layout } from '../src/Layouts/Layout';
import { PortfolioPost } from '../src/Portfolio/PortfolioPost';
import { ResumePost } from '../src/Resume/ResumePost';

const Blog: NextPage = () => {
  const { classes } = useStyles();

  const Posts = [PortfolioPost, ResumePost, UpcomingPost];

  return (
    <Layout>
      <ul className={classes.container}>
        {Posts.map((Post, index) => Post({ index }))}
      </ul>
    </Layout>
  );
};

const useStyles = createStyles(() => ({
  container: {
    listStyleType: 'none',
    counterReset: 'post-index',
    margin: 0,
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'wrap',
  },
}));

export default Blog;
