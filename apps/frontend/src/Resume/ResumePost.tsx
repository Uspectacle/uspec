import React from 'react';
import { useTranslation } from 'react-i18next';
import { DefaultPost } from '../Blog/DefaultPost';
import { MyImage } from '../Utils/MyImage';

export const ResumePost = ({ index }: { index: number }) => {
  const { t } = useTranslation();

  return (
    <DefaultPost
      title={t('posts.my-resume.title')}
      text={t('posts.my-resume.text')}
      href={'/resume'}
      image={
        <MyImage
          src="/image/resumeImage.jpg"
          width={420}
          height={310}
          objectFit="cover"
        />
      }
      index={index}
    />
  );
};
