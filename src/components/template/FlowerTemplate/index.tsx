'use client'

import { useState } from 'react'

import { Flower } from '@components/section/flower/Flower'
import { BackButton } from '@components/ui/BackButton'

export type ActivePetal = {
  petal01: {
    active: boolean
    music: MusicSlugs
  }
  petal02: {
    active: boolean
    music: MusicSlugs
  }
  petal03: {
    active: boolean
    music: MusicSlugs
  }
  petal04: {
    active: boolean
    music: MusicSlugs
  }
  petal05: {
    active: boolean
    music: MusicSlugs
  }
  petal06: {
    active: boolean
    music: MusicSlugs
  }
  petal07: {
    active: boolean
    music: MusicSlugs
  }
  petal08: {
    active: boolean
    music: MusicSlugs
  }
  petal09: {
    active: boolean
    music: MusicSlugs
  }
  petal10: {
    active: boolean
    music: MusicSlugs
  }
  petal11: {
    active: boolean
    music: MusicSlugs
  }
  petal12: {
    active: boolean
    music: MusicSlugs
  }
  petal13: {
    active: boolean
    music: MusicSlugs
  }
  petal14: {
    active: boolean
    music: MusicSlugs
  }
  petal15: {
    active: boolean
    music: MusicSlugs
  }
  petal16: {
    active: boolean
    music: MusicSlugs
  }
  petal17: {
    active: boolean
    music: MusicSlugs
  }
  petal18: {
    active: boolean
    music: MusicSlugs
  }
  petal19: {
    active: boolean
    music: MusicSlugs
  }
  petal20: {
    active: boolean
    music: MusicSlugs
  }
}

export const initialActivePetals: ActivePetal = {
  petal01: {
    active: false,
    music: 'A_CARTA'
  },
  petal02: {
    active: false,
    music: 'COSTUMES'
  },
  petal03: {
    active: false,
    music: 'ELA_UNE_TODAS_AS_COISAS'
  },
  petal04: {
    active: false,
    music: 'OUTRA_VEZ'
  },
  petal05: {
    active: false,
    music: 'A_CARTA'
  },
  petal06: {
    active: false,
    music: 'COSTUMES'
  },
  petal07: {
    active: false,
    music: 'ELA_UNE_TODAS_AS_COISAS'
  },
  petal08: {
    active: false,
    music: 'OUTRA_VEZ'
  },
  petal09: {
    active: false,
    music: 'A_CARTA'
  },
  petal10: {
    active: false,
    music: 'COSTUMES'
  },
  petal11: {
    active: false,
    music: 'ELA_UNE_TODAS_AS_COISAS'
  },
  petal12: {
    active: false,
    music: 'OUTRA_VEZ'
  },
  petal13: {
    active: false,
    music: 'A_CARTA'
  },
  petal14: {
    active: false,
    music: 'COSTUMES'
  },
  petal15: {
    active: false,
    music: 'ELA_UNE_TODAS_AS_COISAS'
  },
  petal16: {
    active: false,
    music: 'OUTRA_VEZ'
  },
  petal17: {
    active: false,
    music: 'A_CARTA'
  },
  petal18: {
    active: false,
    music: 'COSTUMES'
  },
  petal19: {
    active: false,
    music: 'ELA_UNE_TODAS_AS_COISAS'
  },
  petal20: {
    active: false,
    music: 'OUTRA_VEZ'
  }
}

export function FlowerTemplate() {
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
      <BackButton />
      <article className='h-screen flex items-center justify-center p-4 w-full bg-cyan-900'>
        <Flower
          activePetal={activePetal}
          setMusicPetal={setMusicPetal}
        />
      </article>
    </main>
  )
}

/* 'use client'

import { useMemo, useState } from 'react'

import { Flower } from '@components/section/flower/Flower'
import { FlowerMusics } from '@components/section/flower/FlowerMusics'

export type ActivePetal = {
  petal01: {
    active: boolean
    music: MusicSlugs
  }
  petal02: {
    active: boolean
    music: MusicSlugs
  }
  petal03: {
    active: boolean
    music: MusicSlugs
  }
  petal04: {
    active: boolean
    music: MusicSlugs
  }
  petal05: {
    active: boolean
    music: MusicSlugs
  }
  petal06: {
    active: boolean
    music: MusicSlugs
  }
  petal07: {
    active: boolean
    music: MusicSlugs
  }
  petal08: {
    active: boolean
    music: MusicSlugs
  }
  petal09: {
    active: boolean
    music: MusicSlugs
  }
  petal10: {
    active: boolean
    music: MusicSlugs
  }
  petal11: {
    active: boolean
    music: MusicSlugs
  }
  petal12: {
    active: boolean
    music: MusicSlugs
  }
  petal13: {
    active: boolean
    music: MusicSlugs
  }
  petal14: {
    active: boolean
    music: MusicSlugs
  }
  petal15: {
    active: boolean
    music: MusicSlugs
  }
  petal16: {
    active: boolean
    music: MusicSlugs
  }
  petal17: {
    active: boolean
    music: MusicSlugs
  }
  petal18: {
    active: boolean
    music: MusicSlugs
  }
  petal19: {
    active: boolean
    music: MusicSlugs
  }
  petal20: {
    active: boolean
    music: MusicSlugs
  }
}

export const initialActivePetals: ActivePetal = {
  petal01: {
    active: false,
    music: 'A_CARTA'
  },
  petal02: {
    active: false,
    music: 'COSTUMES'
  },
  petal03: {
    active: false,
    music: 'ELA_UNE_TODAS_AS_COISAS'
  },
  petal04: {
    active: false,
    music: 'OUTRA_VEZ'
  },
  petal05: {
    active: false,
    music: 'A_CARTA'
  },
  petal06: {
    active: false,
    music: 'COSTUMES'
  },
  petal07: {
    active: false,
    music: 'ELA_UNE_TODAS_AS_COISAS'
  },
  petal08: {
    active: false,
    music: 'OUTRA_VEZ'
  },
  petal09: {
    active: false,
    music: 'A_CARTA'
  },
  petal10: {
    active: false,
    music: 'COSTUMES'
  },
  petal11: {
    active: false,
    music: 'ELA_UNE_TODAS_AS_COISAS'
  },
  petal12: {
    active: false,
    music: 'OUTRA_VEZ'
  },
  petal13: {
    active: false,
    music: 'A_CARTA'
  },
  petal14: {
    active: false,
    music: 'COSTUMES'
  },
  petal15: {
    active: false,
    music: 'ELA_UNE_TODAS_AS_COISAS'
  },
  petal16: {
    active: false,
    music: 'OUTRA_VEZ'
  },
  petal17: {
    active: false,
    music: 'A_CARTA'
  },
  petal18: {
    active: false,
    music: 'COSTUMES'
  },
  petal19: {
    active: false,
    music: 'ELA_UNE_TODAS_AS_COISAS'
  },
  petal20: {
    active: false,
    music: 'OUTRA_VEZ'
  }
}

export const initialMusics: Musics = {
  A_CARTA: {
    cover: '/assets/musics/a-carta/cover.jpg',
    excerpt: [
      '"[...] Escrevo-te',
      'Estas mal traçadas linhas',
      'Meu amor [...]"'
    ],
    highlight: {
      start: 12,
      end: 34
    },
    showExcerpt: false,
    sound: '/assets/musics/a-carta/sound.mp3',
    title: 'A Carta'
  },
  COSTUMES: {
    cover: '/assets/musics/costumes/cover.jpg',
    excerpt: [
      '"[...] O bom dia na cama',
      'A conversa informal [...]"'
    ],
    highlight: {
      start: 12,
      end: 34
    },
    showExcerpt: false,
    sound: '/assets/musics/costumes/sound.mp3',
    title: 'Costumes'
  },
  ELA_UNE_TODAS_AS_COISAS: {
    cover: '/assets/musics/ela-une-todas-as-coisas/cover.jpg',
    excerpt: [
      '[...] Ela está em todas as coisas',
      'Até no vazio que me dá',
      'Quando vejo a tarde cair',
      'E ela não está [...]'
    ],
    highlight: {
      start: 75,
      end: 112
    },
    showExcerpt: false,
    sound: '/assets/musics/ela-une-todas-as-coisas/sound.mp3',
    title: 'Ela Une Todas As Coisas'
  },
  OUTRA_VEZ: {
    cover: '/assets/musics/outra-vez/cover.jpg',
    excerpt: ['"[...] Você é a saudade que eu gosto de ter [...]"'],
    showExcerpt: false,
    highlight: {
      start: 12,
      end: 34
    },
    sound: '/assets/musics/outra-vez/sound.mp3',
    title: 'Outra Vez'
  }
}

export default function FlowerTemplate() {
  const [activePetal, setActivePetal] = useState<ActivePetal>(
    initialActivePetals
  )
  const [currentPetal, setCurrentPetal] = useState<
    keyof typeof activePetal | null
  >(null)
  const [musics, setMusics] = useState<Musics>(initialMusics)
  const [musicSlug, setMusicSlug] = useState<MusicSlugs | null>(null)

  function setMusicPetal(key: keyof typeof activePetal) {
    const musicPetal = initialActivePetals[key].music
    setCurrentPetal(key)
    setMusicSlug(musicPetal)
  }

  function togglePetal() {
    if (!currentPetal) return

    setActivePetal(current => {
      const newData = current
      newData[currentPetal].active = true
      return { ...newData }
    })

    setMusics(current => {
      const newData = current
      const keyMusic = initialActivePetals[currentPetal].music
      newData[keyMusic].showExcerpt = true
      return { ...newData }
    })
  }

  const music = useMemo(
    () => (musicSlug ? musics[musicSlug] : null),
    [musicSlug, musics]
  )

  return (
    <main className='w-dvw h-dvh'>
      <article className='h-screen grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center justify-center p-4 w-full h-full bg-blue-50'>
          <Flower
            activePetal={activePetal}
            setMusicPetal={setMusicPetal}
          />
        </div>
        <div className='flex flex-col min-h-0'>
          <FlowerMusics
            music={music}
            musics={musics}
            togglePetal={togglePetal}
          />
        </div>
      </article>
    </main>
  )
}

// function getMusicAssets(slug: keyof typeof MusicSlugsEnum) {
//   const cover = musics[slug].cover
//   const sound = musics[slug].sound
//   const title = musics[slug].title
//   return { cover, sound, title }
// }

// function ModalContent() {
//   return (
//     <>
//       <audio controls>
//         <source
//           src={getMusicAssets('A_CARTA').sound}
//           type='audio/mpeg'
//         />
//       </audio>
//     </>
//   )
// }

// <Modal
//   buttonContent='Bha'
//   description={<ModalContent />}
//   title='A Carta'
// />
 */
