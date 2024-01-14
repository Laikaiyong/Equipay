import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const DEV_PORT = 4321;

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: process.env.CI
		? 'https://laikaiyong.github.io'
		: `http://localhost:${DEV_PORT}`,
	base: process.env.CI ? '/Equipay/' : undefined,
	server: {
		/* Dev. server only */
		port: DEV_PORT,
	},
});