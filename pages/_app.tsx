import { MantineProvider } from '@mantine/core';
import { MantineEmotionProvider } from '@mantine/emotion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import '../src/Utils/styles.css';
import i18n from '../src/Utils/i18n';

function CustomApp({ Component, pageProps }: AppProps) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: should run when language change
  useEffect(() => {
    const storedLanguage = localStorage.getItem('currentLanguage');
    if (storedLanguage) i18n.changeLanguage(storedLanguage);
  }, [i18n.language]);

  return (
    <MantineEmotionProvider>
      <MantineProvider>
        <I18nextProvider i18n={i18n}>
          <Head>
            <title>uSPEC</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </I18nextProvider>
      </MantineProvider>
    </MantineEmotionProvider>
  );
}

export default CustomApp;
