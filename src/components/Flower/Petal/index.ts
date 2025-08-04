import { ActivePetal } from '..'

export type PetalProps = {
  activePetal: ActivePetal
  togglePetal(key: keyof ActivePetal): void
}

// const Pedal = {}
