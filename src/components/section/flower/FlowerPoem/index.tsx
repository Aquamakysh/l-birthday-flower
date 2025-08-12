import { LockClosed } from '@assets/icons/LockClosed'

type FlowerPoemProps = {
  excerpts: MusicSlugs[][]
  musics: Musics
}

export function FlowerPoem({ excerpts, musics }: FlowerPoemProps) {
  function getMusicPoem(slug: MusicSlugs) {
    const music = musics[slug as MusicSlugs]

    return music.showExcerpt ? (
      <div className='flex flex-col items-center justify-center gap-2'>
        {music.excerpt.map((verse, verseIndex) => (
          <p key={verseIndex} className='text-center'>
            {verse}
          </p>
        ))}
      </div>
    ) : (
      <div className='flex hover:shadow cursor-pointer gap-2 hover:bg-amber-100 items-center justify-center w-full h-8 p-6 rounded-xl'>
        <span>
          <LockClosed color='black' size={24} />
        </span>
        <span className='italic'>{music.title}</span>
      </div>
    )
  }

  return (
    <div className='flex-1 min-h-0 overflow-y-auto overscroll-contain'>
      <div className='space-y-4'>
        <section className='bg-cyan-50 flex flex-col gap-16 items-center justify-center pl-8 pr-8 pt-16 pb-8 w-full'>
          <h1 className='font-semibold text-3xl'>Poema</h1>

          <div
            className={[
              'flex flex-col gap-8 items-center justify-center',
              'bg-cyan-100 bg-opacity-80 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm fade-in w-full'
            ].join(' ')}
          >
            {excerpts.map((spanza, spanzaIndex) => (
              <div
                key={spanzaIndex}
                className='flex flex-col gap-2 items-center justify-center w-full'
              >
                {spanza.map(slug => getMusicPoem(slug))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
