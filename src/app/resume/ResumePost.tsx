'use client';

import { useTranslation } from 'react-i18next';
import { DefaultPost } from '@/components/Blog/DefaultPost';
import { MyImage } from '@/components/Utils/MyImage';

export const ResumePost = ({ index }: { index: number }) => {
  const { t } = useTranslation();

  return (
    <DefaultPost
      title={t('posts.my-resume.title')}
      text={t('posts.my-resume.text')}
      href={'/resume'}
      image={
        <MyImage
          src="/image/Resume/resumeImage.jpg"
          width={420}
          height={310}
          objectFit="cover"
          style={{ width: '100%' }}
        />
      }
      index={index}
      key={`post-${index}`}
    />
  );
};
