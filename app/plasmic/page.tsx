import { notFound } from 'next/navigation';
import { PLASMIC } from '../../lib/plasmic-init';
import {
  PlasmicRootProvider,
  PlasmicComponent,
} from '@plasmicapp/loader-nextjs';

export const dynamic = 'force-dynamic';

export default async function PlasmicTestPage() {
  // This name must match your Plasmic page name in the Plasmic editor.
  const componentName = 'Homepage';

  const plasmicData = await PLASMIC.fetchComponentData(componentName);

  if (!plasmicData) {
    notFound();
  }

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={componentName} />
    </PlasmicRootProvider>
  );
}
