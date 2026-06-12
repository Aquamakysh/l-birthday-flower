import { createSerwistRoute } from '@serwist/turbopack'

export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } =
  createSerwistRoute({
    swSrc: 'src/app/sw.ts',
    injectionPoint: 'self.__SW_MANIFEST',
    globDirectory: '.',
    globPatterns: [
      'public/pwa/**/*'
    ]
  })
