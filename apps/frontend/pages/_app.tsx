/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { I18nextProvider } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import 'dayjs/locale/fr';
import '../src/Utils/styles.css';
import i18n from '../src/Utils/i18n';

function CustomApp({ Component, pageProps }: AppProps) {
  if (
    process.env.NEXT_PUBLIC_NODE_ENV === 'staging' ||
    process.env.NEXT_PUBLIC_NODE_ENV === 'production'
  ) {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('currentLanguage');
    if (storedLanguage) i18n.changeLanguage(storedLanguage);
  }, [i18n.language]);

  return (
    <MantineProvider>
      <I18nextProvider i18n={i18n}>
        <Head>
          <title>uSPEC</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
          />
        </main>
      </I18nextProvider>
    </MantineProvider>
  );
}

export default CustomApp;
