import { PetalProps } from '..'

export function Petal19({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal19) {
    return (
      <path
        d='M364.5 247.08C396.5 306.08 425 318.08 451.5 372.08C450 378.08 376 345.58 353 422.58C353 422.58 299.5 348.08 364.5 247.08Z'
        fill='#47CDC0'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M364.5 247.08C396.5 306.08 425 318.08 451.5 372.08C450 378.08 376 345.58 353 422.58C353 422.58 299.5 348.08 364.5 247.08Z'
      fill='#FA88B1'
      onClick={() => togglePetal('petal19')}
    />
  )
}
