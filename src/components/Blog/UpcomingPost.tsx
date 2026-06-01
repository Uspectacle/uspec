'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { DefaultPost } from './DefaultPost';
import styles from './UpcomingPost.module.css';

export const UpcomingPost = ({ index }: { index: number }) => {
  const { t } = useTranslation();

  return (
    <DefaultPost
      title={t('posts.coming-soon.title')}
      text={t('posts.coming-soon.text')}
      image={
        <Image
          src="/image/comingsoon.png"
          alt="comingsoon"
          width={548}
          height={550}
          objectFit="cover"
          className={styles.image}
        />
      }
      index={index}
    />
  );
};
