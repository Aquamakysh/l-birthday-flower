type PoemTitleProps = {
  text: string
}

export function PoemTitle({ text }: PoemTitleProps) {
  return <h1 className='font-semibold text-3xl'>{text}</h1>
}
