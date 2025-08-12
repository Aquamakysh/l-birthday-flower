type MusicData = {
  cover: string
  excerpt: string[]
  highlight: {
    start: number
    end: number
  }
  showExcerpt: boolean
  sound: string
  title: string
}
type MusicSlugs =
  | 'A_CARTA'
  | 'COSTUMES'
  | 'ELA_UNE_TODAS_AS_COISAS'
  | 'OUTRA_VEZ'

type Musics = Record<MusicSlugs, MusicData>
