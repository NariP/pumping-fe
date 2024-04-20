import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx}'],
  },
  // 비우면 기본 preset disabled 처리
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetTypography(),
    presetUno(),
    presetIcons({}),
    // ...custom presets
  ],
  // rules: [['m-1', { margin: '1px' }]],
});
