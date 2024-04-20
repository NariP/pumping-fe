/// <reference types="vitest" />
import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import UnoCSS from 'unocss/vite';

installGlobals();

export default defineConfig({
  plugins: [remix(), UnoCSS(), tsconfigPaths()],
  test: {
    globals: true,
  },
  server: {
    port: 3000,
    /** 포트가 이미 사용 중일 때 다른 포트를 사용하게끔 설정 */
    strictPort: false,
  },
});
