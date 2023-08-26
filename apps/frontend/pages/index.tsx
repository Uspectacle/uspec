import { createStyles } from '@mantine/core';
import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React from 'react';
import { UpcomingPost } from '../src/Blog/UpcomingPost';
import { ResumePost } from '../src/Resume/ResumePost';
import { PortfolioPost } from '../src/Portfolio/PortfolioPost';

const Blog: NextPage = () => {
  const { classes } = useStyles();

  const Posts = [
    PortfolioPost,
    ResumePost,
    UpcomingPost,
    UpcomingPost,
    UpcomingPost,
    UpcomingPost,
  ];

  return (
    <Layout>
      <ul className={classes.container}>
        {Posts.map((Post, index) => (
          <React.Fragment key={`post-${index}`}>
            {Post({ index })}
          </React.Fragment>
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
