import { PetalProps } from '..'

export function Petal07({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal07) {
    return (
      <path
        d='M724 260.08C663.001 257.58 619.5 202.58 617.5 204.08C615.5 205.58 684 292.08 729 288.08C774 284.08 783 256.08 781 252.08C779 248.08 785 262.58 724 260.08Z'
        fill='#40E0D0'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M724 260.08C663.001 257.58 619.5 202.58 617.5 204.08C615.5 205.58 684 292.08 729 288.08C774 284.08 783 256.08 781 252.08C779 248.08 785 262.58 724 260.08Z'
      fill='#FF9BBF'
      onClick={() => togglePetal('petal07')}
    />
  )
}
