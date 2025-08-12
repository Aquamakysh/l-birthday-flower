import { FlowerHeader } from '../FlowerHeader'
import { FlowerPoem } from '../FlowerPoem'

type FlowerMusicsProps = {
  music: MusicData | null
  musics: Musics
  togglePetal(): void
}

export function FlowerMusics({
  music,
  musics,
  togglePetal
}: FlowerMusicsProps) {
  const excerpts: MusicSlugs[][] = [
    ['COSTUMES', 'ELA_UNE_TODAS_AS_COISAS'],
    ['A_CARTA', 'OUTRA_VEZ']
  ]

  return (
    <>
      <FlowerHeader music={music} togglePetal={togglePetal} />
      <FlowerPoem excerpts={excerpts} musics={musics} />
    </>
  )
}
