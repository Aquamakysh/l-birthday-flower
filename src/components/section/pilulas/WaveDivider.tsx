import { accent } from './data'

export function WaveDivider() {
  return (
    <svg
      width='140'
      height='12'
      viewBox='0 0 140 12'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M 4,9 C 25,3 58,10 70,7 C 82,4 112,9 136,6'
        stroke={accent}
        strokeWidth='1.5'
        strokeLinecap='round'
        fill='none'
        opacity='0.55'
      />
    </svg>
  )
}
