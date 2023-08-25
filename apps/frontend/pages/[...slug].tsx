import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

const Page404: NextPage = () => {
  const router = useRouter();

  return <strong>{router.asPath}</strong>;
};

export default Page404;
