import { Suspense } from 'react';
import BlockedPage from '@/components/BlockedPage';
import { BlockedPageProps } from '@/types/common';

export default async function Blocked({ searchParams }: Readonly<BlockedPageProps>) {
  const query = await searchParams;
  const country = query.country ?? 'Unknown';
  const ip = query.ip ?? 'Unknown';
  const reason = query.reason ? decodeURIComponent(query.reason) : '';

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlockedPage
        country={country}
        ip={ip}
        reason={reason}
      />
    </Suspense>
  );
}
