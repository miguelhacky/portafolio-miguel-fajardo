import { useSyncExternalStore } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

let mediaQueryList: MediaQueryList | null = null

function getMediaQueryList() {
  if (typeof window === 'undefined') return null
  mediaQueryList ??= window.matchMedia(REDUCED_MOTION_QUERY)
  return mediaQueryList
}

function subscribe(callback: () => void) {
  const query = getMediaQueryList()
  if (!query) return () => undefined
  query.addEventListener('change', callback)
  return () => query.removeEventListener('change', callback)
}

function getSnapshot() {
  return getMediaQueryList()?.matches ?? false
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
