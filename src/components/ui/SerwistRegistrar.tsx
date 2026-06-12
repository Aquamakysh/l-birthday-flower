'use client'

import { useEffect } from 'react'

export function SerwistRegistrar() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/serwist/sw.js', { scope: '/' })
        .catch(console.error)
    }
  }, [])
  return null
}
