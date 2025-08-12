import { ReactNode } from 'react'

type PoemContainerProps = {
  children: ReactNode
}

export function PoemContainer({ children }: PoemContainerProps) {
  return (
    <div
      className={[
        'flex flex-col gap-8 items-center justify-center',
        'bg-cyan-100 bg-opacity-80 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm fade-in'
      ].join(' ')}
    >
      {children}
    </div>
  )
}
