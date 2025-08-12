import { ActivePetal } from '@components/template/FlowerTemplate'

export type PetalProps = {
  activePetal: ActivePetal
  togglePetal(key: keyof ActivePetal): void
}

// const Pedal = {}
