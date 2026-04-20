import { LottieAnimation } from '@components/group/feedback/lottie-animation'
import { BackButton } from '@components/ui/BackButton'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Larissa',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>"
  }
}

export default function Larissa() {
  return (
    <main className='w-dvw h-dvh'>
      <BackButton />
      <article className='flex w-full h-full items-center justify-center'>
        <div className='flex gap-2 w-max'>
          <LottieAnimation
            className='h-12 w-12'
            name='lFlowerAlphabet'
          />
          <LottieAnimation
            className='h-12 w-12'
            name='aFlowerAlphabet'
          />
          <LottieAnimation
            className='h-12 w-12'
            name='rFlowerAlphabet'
          />
          <LottieAnimation
            className='h-12 w-12'
            name='iFlowerAlphabet'
          />
          <LottieAnimation
            className='h-12 w-12'
            name='sFlowerAlphabet'
          />
          <LottieAnimation
            className='h-12 w-12'
            name='sFlowerAlphabet'
          />
          <LottieAnimation
            className='h-12 w-12'
            name='aFlowerAlphabet'
          />
        </div>
      </article>
    </main>
  )
}
