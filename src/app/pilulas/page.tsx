import { PilulasTemplate } from '@components/template/PilulasTemplate'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pílulas',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>"
  }
}

export default function Pilulas() {
  return <PilulasTemplate />
}
