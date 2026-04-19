import { ReactNode } from 'react'

type PoemContainerProps = {
  children: ReactNode
  className?: string
}

export function PoemContainer({
  children,
  className
}: PoemContainerProps) {
  const base = 'flex flex-col gap-8 items-center justify-center'
  const defaultStyle =
    'bg-cyan-100 bg-opacity-80 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm fade-in'

  return (
    <div className={[base, className ?? defaultStyle].join(' ')}>
      {children}
    </div>
  )
}
