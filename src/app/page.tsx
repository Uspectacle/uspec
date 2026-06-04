'use client';

import type { NextPage } from 'next';
import { UpcomingPost } from '@/components/Blog/UpcomingPost';
import { Layout } from '@/components/Layouts/Layout';
import styles from './page.module.css';
import { PortfolioPost } from './portfolio/PortfolioPost';
import { ResumePost } from './resume/ResumePost';

const Blog: NextPage = () => {
  const Posts = [ResumePost, PortfolioPost, UpcomingPost];

  return (
    <Layout>
      <ul className={styles.container}>
        {Posts.map((Post, index) => (
          <Post key={Post.name} index={index} />
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
