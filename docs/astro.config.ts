import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'

const site =
  process.env['VERCEL_ENV'] !== 'production' && process.env['VERCEL_URL']
    ? `https://${process.env['VERCEL_URL']}`
    : 'https://starlight-theme-rapide.vercel.app/'

export default defineConfig({
  integrations: [
    starlight({
      credits: true,
   
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: new URL('og.jpg', site).href },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: 'Starlight theme inspired by the Visual Studio Code Vitesse theme.',
          },
        },
      ],
      plugins: [starlightThemeRapide()],
      sidebar: [
        {
        label: 'Start Here',
        items: [
          { label: 'Welcome to IoT Lab', slug: 'getting-started' },
          { label: 'What is IoT?', slug: 'what-is-iot' },
          { label: 'What You Need', slug: 'what-you-need' },
          { label: 'How to Use This Lab', slug: 'how-to-use' },
        ],
        },
        {
        label: 'Microcontrollers',
        items: [
          { label: 'Overview', slug: 'microcontrollers' },
          { label: 'ESP32 with Arduino IDE', slug: 'microcontrollers/esp32-arduino-ide',
    },
  ],
},
        {
          label: 'Resources',
          items: [{ label: 'Plugins and Tools', link: '/resources/starlight/' }],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      social: [
        { href: 'https://bsky.app/profile/hideoo.dev', icon: 'blueSky', label: 'Bluesky' },
        { href: 'https://github.com/HiDeoo/starlight-theme-rapide', icon: 'github', label: 'GitHub' },
      ],
      title: 'Internet of Things Lab',
    }),
  ],
  site,
})
