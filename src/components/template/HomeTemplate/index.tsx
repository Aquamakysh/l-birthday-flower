'use client'

import { useState } from 'react'

import { Flower } from '@components/section/flower/Flower'

import { ActivePetal, initialActivePetals } from '../FlowerTemplate'

export function HomeTemplate() {
  const [activePetal, setActivePetal] = useState<ActivePetal>(
    initialActivePetals
  )

  function setMusicPetal(key: keyof typeof activePetal) {
    setActivePetal(current => {
      const newData = current
      newData[key].active = true
      return { ...newData }
    })
  }

  return (
    <main className='w-dvw h-dvh'>
      <article className='h-screen flex items-center justify-center p-4 w-full bg-cyan-900'>
        <Flower
          activePetal={activePetal}
          setMusicPetal={setMusicPetal}
        />
      </article>
    </main>
  )
}
