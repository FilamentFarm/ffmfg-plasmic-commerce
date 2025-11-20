'use client';

import * as React from 'react';
import {
  PlasmicRootProvider,
  PlasmicComponent,
} from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/lib/plasmic-init';

const COMPONENT_NAME = 'Homepage'; // must match the name in Plasmic

export default function PlasmicTestPage() {
  const [plasmicData, setPlasmicData] = React.useState<any | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await PLASMIC.fetchComponentData(COMPONENT_NAME);
        if (!cancelled) {
          if (!data) {
            setError('No Plasmic design found for component "Homepage".');
          } else {
            setPlasmicData(data);
          }
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err?.message ?? 'Error loading Plasmic content.');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  if (isLoading) {
    return <div style={{ padding: 24 }}>Loading Plasmic page…</div>;
  }

  if (error || !plasmicData) {
    return (
      <div style={{ padding: 24, color: 'red' }}>
        {error ?? 'Failed to load Plasmic content.'}
      </div>
    );
  }

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={COMPONENT_NAME} />
    </PlasmicRootProvider>
  );
}
