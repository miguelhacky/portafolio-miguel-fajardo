import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

/**
 * Campo de partículas muy ligero, solo decorativo.
 * Se pausa al salir de pantalla o al ocultar la pestaña y se desactiva
 * por completo cuando el usuario prefiere movimiento reducido.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []
    let animationFrame = 0
    let inView = true
    let documentVisible = !document.hidden

    const createParticles = () => {
      const count = Math.min(44, Math.max(16, Math.floor(width / 28)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        radius: Math.random() * 1.4 + 0.5,
        alpha: Math.random() * 0.45 + 0.18,
      }))
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      createParticles()
    }

    const shouldAnimate = () => inView && documentVisible

    const draw = () => {
      animationFrame = 0
      context.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i]
        if (!particle) continue

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < -12) particle.x = width + 12
        if (particle.x > width + 12) particle.x = -12
        if (particle.y < -12) particle.y = height + 12
        if (particle.y > height + 12) particle.y = -12

        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(167, 139, 250, ${particle.alpha})`
        context.fill()

        for (let j = i + 1; j < particles.length; j += 1) {
          const other = particles[j]
          if (!other) continue
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distanceSquared = dx * dx + dy * dy
          if (distanceSquared > 15000) continue

          const opacity = (1 - distanceSquared / 15000) * 0.12
          context.beginPath()
          context.moveTo(particle.x, particle.y)
          context.lineTo(other.x, other.y)
          context.strokeStyle = `rgba(96, 165, 250, ${opacity})`
          context.lineWidth = 0.7
          context.stroke()
        }
      }

      if (shouldAnimate()) {
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    const start = () => {
      if (shouldAnimate() && !animationFrame) {
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    const stop = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
        animationFrame = 0
      }
    }

    const onVisibilityChange = () => {
      documentVisible = !document.hidden
      if (shouldAnimate()) start()
      else stop()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry?.isIntersecting ?? false
        if (shouldAnimate()) start()
        else stop()
      },
      { threshold: 0 },
    )

    resize()
    observer.observe(canvas)
    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('resize', resize)

    if (shouldAnimate()) start()

    return () => {
      stop()
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
