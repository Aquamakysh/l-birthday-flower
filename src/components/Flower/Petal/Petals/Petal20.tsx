import { PetalProps } from '..'

export function Petal20({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal20) {
    return (
      <path
        d='M387 407.58C378 412.08 368.5 417.58 368.5 439.58C368.5 439.58 445 541.08 553 479.08C525.5 463.08 516 453.08 482 431.08C448 409.08 396 403.08 387 407.58Z'
        fill='#47CDC0'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M387 407.58C378 412.08 368.5 417.58 368.5 439.58C368.5 439.58 445 541.08 553 479.08C525.5 463.08 516 453.08 482 431.08C448 409.08 396 403.08 387 407.58Z'
      fill='#FA88B1'
      onClick={() => togglePetal('petal20')}
    />
  )
}
