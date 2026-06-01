'use client';

import { createStyles } from '@mantine/emotion';
import type { NextPage } from 'next';
import { UpcomingPost } from '@/components/Blog/UpcomingPost';
import { Layout } from '@/components/Layouts/Layout';
import { PortfolioPost } from './portfolio/PortfolioPost';
import { ResumePost } from './resume/ResumePost';

const Blog: NextPage = () => {
  const { classes } = useStyles();

  const Posts = [PortfolioPost, ResumePost, UpcomingPost];

  return (
    <Layout>
      <ul className={classes.container}>
        {Posts.map((Post, index) => (
          <Post key={Post.name} index={index} />
        ))}
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
