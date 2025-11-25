'use client';

import * as React from 'react';
import {
  PlasmicRootProvider,
  PlasmicComponent,
} from '@plasmicapp/loader-nextjs';
import { PLASMIC } from 'lib/plasmic-init';

const COMPONENT_NAME = 'Homepage'; // this is your Plasmic page name

export default function PlasmicHomepage() {
  const [plasmicData, setPlasmicData] = React.useState<any | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await PLASMIC.fetchComponentData(COMPONENT_NAME);
        if (!cancelled) {
          setPlasmicData(data ?? null);
        }
      } catch (e) {
        console.error(e);
        if (!cancelled) {
          setError('Error loading page content.');
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return <div style={{ padding: 24, color: 'red' }}>{error}</div>;
  }

  if (!plasmicData) {
    return <div style={{ padding: 24 }}>Loading page…</div>;
  }

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={COMPONENT_NAME} />
    </PlasmicRootProvider>
  );
}
