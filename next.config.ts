import type withSerwistInit from '@serwist/next'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true
            }
          }
        ],
        as: '*.js'
      }
    }
  }
}

// Use require to bypass the tsconfig "@*" → "src/*" alias that would
// incorrectly resolve @serwist/next to ./src/serwist/next at compile time.
// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const withSerwist =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  (require('@serwist/next').default as typeof withSerwistInit)({
    swSrc: 'src/app/sw.ts',
    swDest: 'public/sw.js'
  })

export default withSerwist(nextConfig)
