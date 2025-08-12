type PoemVerseProps = {
  text: string
}

export function PoemVerse({ text }: PoemVerseProps) {
  return <p className='text-center'>{text}</p>
}
