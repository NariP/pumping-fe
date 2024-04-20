/// <reference types="vitest" />
import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import UnoCSS from 'unocss/vite';

installGlobals();

export default defineConfig(({ mode }) => {
  // 현재 작업 디렉터리의 `mode`를 기반으로 env 파일을 불러옴
  // 세 번째 매개변수를 ''로 설정하면 `VITE_` 접두사에 관계없이 모든 환경 변수를 불러옴
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [remix(), UnoCSS(), tsconfigPaths()],
    test: {
      globals: true,
    },
    server: {
      port: 3000,
      /** 포트가 이미 사용 중일 때 다른 포트를 사용하게끔 설정 */
      strictPort: false,
      proxy: {
        '/api': {
          target: env.VITE_API_HOST,
          changeOrigin: true,
        },
      },
    },
  };
});
