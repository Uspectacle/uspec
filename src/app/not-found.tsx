'use client';

import type { NextPage } from 'next';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/Layouts/Layout';
import styles from './not-found.module.css';

const Page404: NextPage = () => {
  const { t } = useTranslation();

  const pathname = usePathname();

  return (
    <Layout>
      <div className={styles.container}>
        <Image src="/image/404.png" alt="404" width={125} height={111} />
        <div>
          <br />
          <strong className={styles.strong}>{pathname}</strong>
          <br />
          <br />
          {t('404.text')}
        </div>
      </div>
    </Layout>
  );
};

export default Page404;
