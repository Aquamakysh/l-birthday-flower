import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // esbuild and esbuild-wasm must not be bundled server-side;
  // they are used by the @serwist/turbopack route handler at runtime.
  serverExternalPackages: ['esbuild', 'esbuild-wasm'],
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

export default nextConfig
