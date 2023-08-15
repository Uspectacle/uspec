import { createStyles } from '@mantine/core';
import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GREEN_LIGHT, SHADOW, entranceClass } from '../utils/DefaultStyle';
import { MyImage } from '../src/Utils/MyImage';
import { Post } from '../src/Layouts/Post';

const Blog: NextPage = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const posts = [
    {
      title: t('posts.my-resume.title'),
      text: t('posts.my-resume.text'),
      href: '/resume',
      image: (
        <MyImage
          src="/image/resumeImage.jpg"
          width={420}
          height={310}
          objectFit="cover"
        />
      ),
    },
    {
      title: t('posts.coming-soon.title'),
      text: t('posts.coming-soon.text'),
      href: '/',
      image: (
        <MyImage
          src="/image/comingsoon.png"
          width={548}
          height={550}
          objectFit="cover"
        />
      ),
    },
    {
      title: t('posts.coming-soon.title'),
      text: t('posts.coming-soon.text'),
      href: '/',
      image: (
        <MyImage
          src="/image/comingsoon.png"
          width={548}
          height={550}
          objectFit="cover"
        />
      ),
    },
    {
      title: t('posts.coming-soon.title'),
      text: t('posts.coming-soon.text'),
      href: '/',
      image: (
        <MyImage
          src="/image/comingsoon.png"
          width={548}
          height={550}
          objectFit="cover"
        />
      ),
    },
    {
      title: t('posts.coming-soon.title'),
      text: t('posts.coming-soon.text'),
      href: '/',
      image: (
        <MyImage
          src="/image/comingsoon.png"
          width={548}
          height={550}
          objectFit="cover"
        />
      ),
    },
  ];

  return (
    <Layout>
      <ul className={classes.list}>
        {posts.map(({ title, text, href, image }, index) => (
          <li key={`post-${index}`} className={entranceClass(index * 0.25)}>
            <Post title={title} text={text} href={href} image={image} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

const useStyles = createStyles((theme) => ({
  grid: {
    listStyleType: 'none',
  },
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'wrap',
    '& > li': {
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      boxShadow: SHADOW,
      height: 130,
      width: '30em',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
      backgroundColor: GREEN_LIGHT,
      borderRadius: 10,
      overflow: 'hidden',
      [theme.fn.smallerThan(550)]: {
        width: '95%',
        marginRight: 0,
        marginLeft: 0,
      },
      [theme.fn.smallerThan(420)]: {
        height: 'auto',
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
  },
}));

export default Blog;
