import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Larissa',
    short_name: 'Larissa',
    description: 'Minha Flor',
    start_url: '/',
    display: 'standalone',
    background_color: '#164e63',
    theme_color: '#164e63',
    icons: [
      {
        src: '/pwa/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/pwa/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/pwa/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  }
}
