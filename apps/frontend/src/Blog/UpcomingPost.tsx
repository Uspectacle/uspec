import React from 'react';
import { useTranslation } from 'react-i18next';
import { DefaultPost } from '../Blog/DefaultPost';
import { MyImage } from '../Utils/MyImage';

export const UpcomingPost = ({ index }: { index: number }) => {
  const { t } = useTranslation();

  return (
    <DefaultPost
      title={t('posts.coming-soon.title')}
      text={t('posts.coming-soon.text')}
      href={'/'}
      image={
        <MyImage
          src="/image/comingsoon.png"
          width={548}
          height={550}
          objectFit="cover"
        />
      }
      index={index}
    />
  );
};
