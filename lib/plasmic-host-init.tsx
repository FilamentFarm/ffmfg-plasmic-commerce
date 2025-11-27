'use client';

import { PLASMIC } from './plasmic-init';
import { Navbar } from 'components/layout/navbar';

// Register Next.js components so Plasmic Studio can use them visually.
PLASMIC.registerComponent(Navbar, {
  name: 'Navbar',
  props: {}
});

// We don't actually need to export anything special here;
// just importing this file will run the registrations above.
export {};
