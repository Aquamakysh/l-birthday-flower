import AudioCirclePlayer from '@components/group/media/AudioCirclePlayer'

import { FlowerHeaderForm } from '../FlowerHeaderForm'

import Image from 'next/image'

type FlowerHeaderProps = {
  music: MusicData | null
  togglePetal: () => void
}

export function FlowerHeader({
  music,
  togglePetal
}: FlowerHeaderProps) {
  return (
    <div className='h-[300px] flex flex-col shrink-0 border-b items-center justify-center p-4 gap-8'>
      {music ? (
        <>
          <h2 className='text-xl font-semibold'>{music.title}</h2>

          <div className='flex items-center justify-center gap-8'>
            <div className='h-max relative'>
              <div className='absolute inset-6 rounded-full overflow-hidden'>
                <Image
                  src={music.cover}
                  alt='Descrição'
                  fill
                  className='object-cover object-center'
                  priority
                />
                <div className='absolute inset-0 bg-black/40'></div>
              </div>

              <AudioCirclePlayer
                src={music.sound}
                size={140}
                stroke={12}
                progressColorClass='stroke-sky-500'
                highlightColorClass='stroke-rose-500'
                trackColorClass='stroke-neutral-300'
                numberSize='text-3xl'
                numberColorClass='text-sky-600'
                highlightNumberColorClass='text-rose-600'
                highlightStart={music.highlight.start}
                highlightEnd={music.highlight.end}
              />
            </div>

            <div className='flex-1'>
              {music.excerpt.map((verse, verseIndex) => (
                <p key={verseIndex} className='text-center'>
                  {verse}
                </p>
              ))}
            </div>
          </div>

          <FlowerHeaderForm music={music} togglePetal={togglePetal} />
        </>
      ) : (
        <>
          <h2 className='text-xl font-semibold'>Poema Interativo</h2>
        </>
      )}
    </div>
  )
}
