import React from 'react';
import dynamic from 'next/dynamic';

const PartyCreate = dynamic(() => import('@/components/_pages/party/create/PartyCreate'), { ssr: false });

export default function PartyCreatePage() {
  return (
    <>
      <PartyCreate />
    </>
  );
}
