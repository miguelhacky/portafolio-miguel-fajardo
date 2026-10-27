import { useEffect, useState } from 'react'
import { Icon } from './Icon'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 700)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      aria-label="Volver al inicio de la página"
      tabIndex={visible ? 0 : -1}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
      }}
    >
      <Icon name="chevron-up" size={20} />
    </button>
  )
}
