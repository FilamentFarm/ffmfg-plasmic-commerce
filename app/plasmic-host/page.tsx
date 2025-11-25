'use client';

import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from 'lib/plasmic-init';

export default function PlasmicHost() {
  // This is the special host page that Plasmic Studio uses.
  return PLASMIC && <PlasmicCanvasHost />;
}
