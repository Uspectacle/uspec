'use client';

import { useTranslation } from 'react-i18next';
import { MyImage } from '@/components/Utils/MyImage';
import { DefaultPost } from './DefaultPost';

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
          style={{ width: '100%' }}
          objectFit="cover"
        />
      }
      index={index}
    />
  );
};
