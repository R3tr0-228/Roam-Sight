import React from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '@/styles/globals.css';
import { GeoCurrencyProvider } from '@/context/GeoCurrencyContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Roam Sight - Premium Desert Tours & Adventures"
        description="Discover the magic of the Arabian desert with our premium tours. Experience thrilling safaris, cultural heritage walks, and overnight camping under the stars."
        canonical="https://roamsight.com"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://roamsight.com',
          siteName: 'Roam Sight',
          title: 'Roam Sight - Premium Desert Tours & Adventures',
          description: 'Discover the magic of the Arabian desert with our premium tours. Experience thrilling safaris, cultural heritage walks, and overnight camping under the stars.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200',
              width: 1200,
              height: 630,
              alt: 'Desert Safari Adventure',
            },
          ],
        }}
        twitter={{
          handle: '@roamsight',
          site: '@roamsight',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'theme-color',
            content: '#f1760a',
          },
        ]}
      />
      <GeoCurrencyProvider>
        <Component {...pageProps} />
      </GeoCurrencyProvider>
    </>
  );
}

