import { useEffect, useState } from 'react'

type FlowerHeaderFormProps = {
  music: MusicData | null
  togglePetal: () => void
}

export function FlowerHeaderForm({
  music,
  togglePetal
}: FlowerHeaderFormProps) {
  const [successfullyUnlocked, setSuccessfullyUnlocked] = useState<
    boolean | null
  >(null)

  useEffect(() => {
    if (successfullyUnlocked === null) return
    setTimeout(() => {
      setSuccessfullyUnlocked(null)
    }, 5000)
  }, [successfullyUnlocked])

  if (music && music.showExcerpt) return <></>

  function handleSubmit(e: any) {
    e.preventDefault()
    if (!music) {
      setSuccessfullyUnlocked(null)
      return
    }

    const highlightEnd = e.target.highlightEnd.value
    console.log('highlightEnd', highlightEnd)

    const highlightStart = e.target.highlightStart.value
    console.log('highlightStart', highlightStart)

    const isEndTime = Number(highlightEnd) === music.highlight.end
    const isStartTime =
      Number(highlightStart) === music.highlight.start

    if (isEndTime && isStartTime) {
      setSuccessfullyUnlocked(true)
      togglePetal()
      return
    }

    setSuccessfullyUnlocked(false)
  }

  return successfullyUnlocked === null ? (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center justify-between'>
        <input
          type='number'
          name='highlightStart'
          placeholder='Início'
        />
        <input
          type='number'
          name='highlightEnd'
          placeholder='Final'
        />
        <button type='submit'>Desbloquear</button>
      </div>
    </form>
  ) : (
    <>{successfullyUnlocked ? <>Sucesso!</> : <>Erro.</>}</>
  )
}
