import { PetalProps } from '..'

export function Petal04({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal04) {
    return (
      <path
        d='M742.5 169.58C743.5 209.08 683 208.08 679.5 202.58C676 197.08 717.5 193.08 717.5 158.58C717.5 124.08 694.5 125.08 695 122.08C695.5 119.08 709 115.08 716 118.08C723 121.08 741.5 130.08 742.5 169.58Z'
        fill='#35C4B5'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M742.5 169.58C743.5 209.08 683 208.08 679.5 202.58C676 197.08 717.5 193.08 717.5 158.58C717.5 124.08 694.5 125.08 695 122.08C695.5 119.08 709 115.08 716 118.08C723 121.08 741.5 130.08 742.5 169.58Z'
      fill='#F484AC'
      onClick={() => togglePetal('petal04')}
    />
  )
}
