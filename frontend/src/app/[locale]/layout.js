import './global.css'
import ResponsiveAppBar from './appbar'
import { NextIntlClientProvider } from 'next-intl';
import * as React from 'react';
import Box from '@mui/material/Box';

import ThemeProvider from './theme-provider';

import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}


export default async function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider>
          <Box
            sx={{
              bgcolor: 'background.default',
              color: 'text.primary',
              minHeight: '100vh'
            }}
          >
            <NextIntlClientProvider locale={locale} messages={messages}>
              <ResponsiveAppBar />
              {children}
            </NextIntlClientProvider>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}