import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://landing.stardbots.net',
    base: '',
    integrations: [react(), tailwind()],
});