'use client';

import * as React from 'react';
import {
  PlasmicRootProvider,
  PlasmicComponent,
} from '@plasmicapp/loader-nextjs';
import { PLASMIC } from 'lib/plasmic-init'; // <-- fixed import

const COMPONENT_NAME = 'Homepage'; // make sure this matches your Plasmic page name

export default function PlasmicTestPage() {
  const [plasmicData, setPlasmicData] = React.useState<any | null>(null);

  React.useEffect(() => {
    PLASMIC.fetchComponentData(COMPONENT_NAME).then(setPlasmicData);
  }, []);

  if (!plasmicData) {
    return <div style={{ padding: 24 }}>Loading Plasmic page…</div>;
  }

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={COMPONENT_NAME} />
    </PlasmicRootProvider>
  );
}
