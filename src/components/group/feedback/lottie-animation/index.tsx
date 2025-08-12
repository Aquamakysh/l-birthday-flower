'use client'

import { HTMLAttributes } from 'react'

import { lottieAnimations } from '@assets/animations'

import dynamic from 'next/dynamic'

type LottieAnimation = {
  className?: HTMLAttributes<HTMLDivElement>['className']
  name: LottieAnimationNames
}

export function LottieAnimation({
  className = 'h-8 w-8',
  name
}: LottieAnimation) {
  const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
  })

  return (
    <div className={className}>
      <Lottie animationData={lottieAnimations[name]} loop={0} />
    </div>
  )
}
