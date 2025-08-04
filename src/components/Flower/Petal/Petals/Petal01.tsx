import { PetalProps } from '..'

export function Petal01({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal01) {
    return (
      <path
        d='M654 134.08C635.5 132.58 634 149.08 634 149.08C634 149.08 630 161.08 654 160.08C678 159.08 674.5 149.08 674.5 149.08C674.5 149.08 672.5 135.58 654 134.08Z'
        fill='#329C92'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M654 134.08C635.5 132.58 634 149.08 634 149.08C634 149.08 630 161.08 654 160.08C678 159.08 674.5 149.08 674.5 149.08C674.5 149.08 672.5 135.58 654 134.08Z'
      fill='#9A4E69'
      onClick={() => togglePetal('petal01')}
    />
  )
}
