import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import { Icon } from './Icon'

const INTERACTIVE_SELECTOR =
  'a, button, input, select, textarea, [role="button"], [role="link"], [contenteditable="true"]'

const COLLISION_MARGIN = 4

/**
 * Botón flotante de WhatsApp. Se oculta solo cuando quedaría encima de un
 * control interactivo, para no tapar enlaces ni botones mientras se navega.
 */
export function WhatsAppFloat() {
  const ref = useRef<HTMLAnchorElement>(null)
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let frame = 0
    let settleTimer = 0
    let watchInterval = 0

    const update = () => {
      frame = 0
      if (document.activeElement === node || node.matches(':hover')) {
        setBlocked(false)
        return
      }

      const style = getComputedStyle(node)
      const width = node.offsetWidth
      const height = node.offsetHeight
      if (!width || !height) return

      // Posición base, sin la transformación de ocultado.
      const right = parseFloat(style.right) || 0
      const bottom = parseFloat(style.bottom) || 0
      const box = {
        left: window.innerWidth - right - width - COLLISION_MARGIN,
        right: window.innerWidth - right + COLLISION_MARGIN,
        top: window.innerHeight - bottom - height - COLLISION_MARGIN,
        bottom: window.innerHeight - bottom + COLLISION_MARGIN,
      }

      let overlapsControl = false
      for (const control of document.querySelectorAll<HTMLElement>(INTERACTIVE_SELECTOR)) {
        if (node.contains(control)) continue

        const rect = control.getBoundingClientRect()
        if (!rect.width || !rect.height) continue

        if (
          rect.left >= box.right ||
          rect.right <= box.left ||
          rect.top >= box.bottom ||
          rect.bottom <= box.top
        ) {
          continue
        }

        const controlStyle = getComputedStyle(control)
        if (controlStyle.pointerEvents === 'none') continue
        if (typeof control.checkVisibility === 'function') {
          const visible = control.checkVisibility({
            opacityProperty: true,
            visibilityProperty: true,
          })
          if (!visible) continue
        }

        overlapsControl = true
        break
      }

      setBlocked(overlapsControl)
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    // Tras dejar de desplazar, revisamos durante un par de segundos: los
    // reveals mueven botones y pueden acabar debajo del botón flotante.
    const watchMovement = () => {
      window.clearInterval(watchInterval)
      const startedAt = performance.now()
      watchInterval = window.setInterval(() => {
        update()
        if (performance.now() - startedAt >= 2000) {
          window.clearInterval(watchInterval)
          watchInterval = 0
        }
      }, 120)
    }

    const scheduleSettled = () => {
      window.clearTimeout(settleTimer)
      settleTimer = window.setTimeout(watchMovement, 140)
    }

    const onMovement = () => {
      schedule()
      scheduleSettled()
    }

    // La entrada del hero y otros reveals mueven controles: revisamos después.
    const timers = [window.setTimeout(update, 900), window.setTimeout(update, 1800)]

    window.addEventListener('scroll', onMovement, { passive: true })
    window.addEventListener('resize', onMovement)
    document.addEventListener('click', onMovement, true)
    document.addEventListener('keydown', onMovement, true)
    document.addEventListener('transitionend', schedule, true)

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      window.clearTimeout(settleTimer)
      window.clearInterval(watchInterval)
      window.removeEventListener('scroll', onMovement)
      window.removeEventListener('resize', onMovement)
      document.removeEventListener('click', onMovement, true)
      document.removeEventListener('keydown', onMovement, true)
      document.removeEventListener('transitionend', schedule, true)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <a
      ref={ref}
      className={`whatsapp-float ${blocked ? 'is-blocked' : ''}`}
      href={profile.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp (se abre en WhatsApp o WhatsApp Web)"
      tabIndex={blocked ? -1 : undefined}
    >
      <span className="whatsapp-float__ring" aria-hidden="true" />
      <Icon name="whatsapp" size={27} />
      <span className="whatsapp-float__tooltip" aria-hidden="true">
        Contactar por WhatsApp
      </span>
    </a>
  )
}
