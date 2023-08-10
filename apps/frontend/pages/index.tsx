import { createStyles } from '@mantine/core'
import { NextPage } from 'next'
import { Layout } from '../src/Layouts/Layout'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { GREEN_LIGHT, PURPLE_INTENSE, WHITE } from '../utils/constants'
import Link from 'next/link'
import { MyImage } from '../src/Utils/MyImage'

const Home: NextPage = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()

  const posts = [
    {
      title: t('posts.my-resume.title'),
      text: t('posts.my-resume.text'),
      href: '/resume',
      image: (
        <MyImage
          alt="myself"
          src="/image/resumeImage.jpg"
          width={420}
          height={310}
          objectFit={'cover'}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      )
    },
    {
      title: t('posts.coming-soon.title'),
      text: t('posts.coming-soon.text'),
      href: '/resume',
      image: (
        <MyImage
          alt="comingsoon"
          src="/image/comingsoon.jpeg"
          width={548}
          height={550}
          objectFit={'cover'}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      )
    },
    {
      title: t('posts.coming-soon.title'),
      text: t('posts.coming-soon.text'),
      href: '/resume',
      image: (
        <MyImage
          alt="comingsoon"
          src="/image/comingsoon.jpeg"
          width={548}
          height={550}
          objectFit={'cover'}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      )
    },
    {
      title: t('posts.coming-soon.title'),
      text: t('posts.coming-soon.text'),
      href: '/resume',
      image: (
        <MyImage
          alt="comingsoon"
          src="/image/comingsoon.jpeg"
          width={548}
          height={550}
          objectFit={'cover'}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      )
    },
    {
      title: t('posts.coming-soon.title'),
      text: t('posts.coming-soon.text'),
      href: '/resume',
      image: (
        <MyImage
          alt="comingsoon"
          src="/image/comingsoon.jpeg"
          width={548}
          height={550}
          objectFit={'cover'}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      )
    },
    {
      title: t('posts.coming-soon.title'),
      text: t('posts.coming-soon.text'),
      href: '/resume',
      image: (
        <MyImage
          alt="comingsoon"
          src="/image/comingsoon.jpeg"
          width={548}
          height={550}
          objectFit={'cover'}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      )
    },
    {
      title: t('posts.coming-soon.title'),
      text: t('posts.coming-soon.text'),
      href: '/resume',
      image: (
        <MyImage
          alt="comingsoon"
          src="/image/comingsoon.jpeg"
          width={548}
          height={550}
          objectFit={'cover'}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      )
    }
  ]

  return (
    <Layout summary={undefined}>
      <ul className={classes.list}>
        {posts.map(({ title, text, href, image }, index) => (
          <li key={`post-${index}`}>
            <Link
              href={href}
              rel={'noreferrer'}
              className={classes.item}
              passHref
            >
              <div className={classes.image}>{image}</div>
              <div className={classes.infos}>
                <div className={classes.title}>{title}</div>
                <div className={classes.text}>{text}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

const useStyles = createStyles(() => ({
  grid: {
    listStyleType: 'none'
  },
  list: {
    listStyleType: 'none',
    padding: 10,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'wrap',
    '& > li': {
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
      height: 120,
      width: 450,
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
      backgroundColor: GREEN_LIGHT,
      borderRadius: 10,
      overflow: 'hidden'
    }
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    height: '100%',
    width: '100%',
    backgroundColor: WHITE,
    opacity: 1,
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 0.9
    }
  },
  image: {
    aspectRatio: '1',
    height: '100%',
    objectFit: 'cover'
  },
  infos: {
    boxSizing: 'border-box',
    padding: 10,
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: PURPLE_INTENSE
  },
  text: {
    fontSize: '0.8em',
    marginTop: 10,
    textAlign: 'justify',
    alignSelf: 'start'
  }
}))

export default Home
