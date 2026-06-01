'use client';

import { MantineProvider } from '@mantine/core';
import { MantineEmotionProvider } from '@mantine/emotion';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/components/Utils/i18n';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const storedLanguage = localStorage.getItem('currentLanguage');
    if (storedLanguage) i18n.changeLanguage(storedLanguage);
  }, []);

  return (
    <MantineEmotionProvider>
      <MantineProvider>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </MantineProvider>
    </MantineEmotionProvider>
  );
}
