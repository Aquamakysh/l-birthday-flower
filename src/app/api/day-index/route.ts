import { getDayIndex } from '@components/section/pilulas/data'

import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ dayIndex: getDayIndex() })
}
