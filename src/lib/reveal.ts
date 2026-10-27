import type { CSSProperties } from 'react'

/** Retardo de entrada para las animaciones de scroll reveladas. */
export function revealStyle(delay = 0): CSSProperties {
  return { '--reveal-delay': `${delay}ms` } as CSSProperties
}
