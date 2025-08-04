import { PetalProps } from '..'

export function Petal09({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal09) {
    return (
      <path
        d='M801.5 194.581C798 152.581 746 124.081 743.5 125.081C741 126.081 764.5 149.081 763.5 190.581C762.5 232.08 739.5 244.081 741 246.081C742.5 248.081 805 236.581 801.5 194.581Z'
        fill='#40E0D0'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M801.5 194.581C798 152.581 746 124.081 743.5 125.081C741 126.081 764.5 149.081 763.5 190.581C762.5 232.08 739.5 244.081 741 246.081C742.5 248.081 805 236.581 801.5 194.581Z'
      fill='#FF9BBF'
      onClick={() => togglePetal('petal09')}
    />
  )
}
