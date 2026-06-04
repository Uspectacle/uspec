'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { DefaultPost } from '@/components/Blog/DefaultPost';

export const ResumePost = ({ index }: { index: number }) => {
  const { t } = useTranslation();

  return (
    <DefaultPost
      title={t('posts.my-resume.title')}
      text={t('posts.my-resume.text')}
      href={'/resume'}
      image={
        <Image
          src="/image/Resume/resumeImage.png"
          alt="resume"
          width={420}
          height={310}
          objectFit="cover"
        />
      }
      index={index}
    />
  );
};
