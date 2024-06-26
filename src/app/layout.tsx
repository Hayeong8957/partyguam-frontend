import React from 'react';
import type { Metadata } from 'next';

import '@/styles/global.css';
import { Modal } from '@/components/_molecules';
import FormContextProvider from '@/contexts/FormContext/FormProvider';
import ModalContextProvider from '@/contexts/ModalContext/ModalProvider';

import Header from './Header';

export const metadata: Metadata = {
  title: 'PartyGuam',
  description: '파티 구해? partyguam!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body suppressHydrationWarning={true}>
        <ModalContextProvider>
          <FormContextProvider>
            <Header />
            <Modal />
            {children}
          </FormContextProvider>
        </ModalContextProvider>
      </body>
    </html>
  );
}
