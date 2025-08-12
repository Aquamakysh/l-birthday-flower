import { ReactNode } from 'react'

type PoemStanzaProps = {
  children: ReactNode
}

export function PoemStanza({ children }: PoemStanzaProps) {
  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      {children}
    </div>
  )
}
