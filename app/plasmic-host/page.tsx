'use client';

import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from 'lib/plasmic-init';
import 'lib/plasmic-host-init'; // register Next.js components for Plasmic Studio

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
