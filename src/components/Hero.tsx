import { useEffect, useRef } from 'react'
import { profile } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useTypewriter } from '../hooks/useTypewriter'
import { revealStyle } from '../lib/reveal'
import { Icon } from './Icon'
import { ParticleField } from './ParticleField'

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  const typed = useTypewriter(profile.typedPhrases, !reducedMotion)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reducedMotion) return

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!finePointer) return

    let frame = 0
    let nextX = 0
    let nextY = 0

    const apply = () => {
      frame = 0
      section.style.setProperty('--pointer-x', `${nextX}px`)
      section.style.setProperty('--pointer-y', `${nextY}px`)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect()
      nextX = event.clientX - rect.left
      nextY = event.clientY - rect.top
      if (!frame) frame = window.requestAnimationFrame(apply)
    }

    section.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      section.removeEventListener('pointermove', onPointerMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [reducedMotion])

  return (
    <section id="inicio" className="hero" ref={sectionRef} aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid-lines" />
        <div className="hero__aurora hero__aurora--one" />
        <div className="hero__aurora hero__aurora--two" />
        <div className="hero__spotlight" />
      </div>
      <ParticleField />

      <div className="container hero__grid">
        <div className="hero__content">
          {profile.status.enabled ? (
            <div className="status-pill" data-reveal style={revealStyle(40)}>
              <span className="status-pill__dot" aria-hidden="true" />
              {profile.status.label}
            </div>
          ) : null}

          <p className="hero__eyebrow" data-reveal style={revealStyle(100)}>
            Desarrollador de software junior
          </p>

          <h1 className="hero__title" id="hero-title" data-reveal style={revealStyle(160)}>
            <span className="hero__title-line">Hola, soy</span>{' '}
            <span className="hero__title-name">
              Miguel Fajardo<span className="hero__title-dot">.</span>
            </span>
          </h1>

          <p className="hero__tagline" data-reveal style={revealStyle(230)}>
            {profile.tagline}
          </p>

          <div className="hero__typing" data-reveal style={revealStyle(290)}>
            <span className="hero__typing-prompt" aria-hidden="true">
              &gt;_
            </span>
            <span className="hero__typing-text" aria-hidden="true">
              {typed}
            </span>
            <span className="hero__caret" aria-hidden="true" />
            <span className="sr-only">Desarrollador de software.</span>
          </div>

          <p className="hero__description" data-reveal style={revealStyle(350)}>
            {profile.heroDescription}
          </p>

          <div className="hero__actions" data-reveal style={revealStyle(420)}>
            <a className="btn btn--primary" href="#proyectos">
              Ver mis proyectos
              <Icon name="arrow-down" size={18} />
            </a>
            <a className="btn btn--secondary" href="#contacto">
              Contactarme
              <Icon name="arrow-right" size={18} />
            </a>
            {profile.resumeUrl ? (
              <a
                className="btn btn--resume"
                href={profile.resumeUrl}
                download={profile.resumeFileName}
              >
                <Icon name="download" size={17} />
                Descargar hoja de vida
              </a>
            ) : null}
          </div>

          <div className="hero__meta" data-reveal style={revealStyle(490)}>
            <a
              className="hero__meta-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" size={16} />
              @miguelhacky
            </a>
            <span className="hero__meta-separator" aria-hidden="true" />
            <span className="hero__meta-item">
              <Icon name="map-pin" size={16} />
              {profile.location}
            </span>
            <span className="hero__meta-separator" aria-hidden="true" />
            <span className="hero__meta-item">SENA · ADSO</span>
          </div>
        </div>

        <div className="hero__visual" data-reveal="scale" style={revealStyle(300)}>
          <div className="portrait">
            <div className="portrait__aura" aria-hidden="true" />
            <div className="portrait__orbit portrait__orbit--outer" aria-hidden="true">
              <span className="portrait__orbit-dot" />
            </div>
            <div className="portrait__orbit portrait__orbit--inner" aria-hidden="true">
              <span className="portrait__orbit-dot" />
            </div>

            <div className="portrait__frame">
              <span className="portrait__corner portrait__corner--tl" aria-hidden="true" />
              <span className="portrait__corner portrait__corner--tr" aria-hidden="true" />
              <span className="portrait__corner portrait__corner--bl" aria-hidden="true" />
              <span className="portrait__corner portrait__corner--br" aria-hidden="true" />
              <img
                className="portrait__image"
                src={profile.photo.src}
                alt={profile.photo.alt}
                width={profile.photo.width}
                height={profile.photo.height}
                fetchPriority="high"
                decoding="async"
              />
              <span className="portrait__scanline" aria-hidden="true" />
              <span className="portrait__gloss" aria-hidden="true" />
              <span className="portrait__plaque" aria-hidden="true">
                <span className="portrait__plaque-mark">MF</span>
                <span className="portrait__plaque-copy">
                  <strong>Miguel Fajardo</strong>
                  <small>Junior Developer</small>
                </span>
              </span>
            </div>

            <span className="tech-float tech-float--html" aria-hidden="true">
              <span className="tech-float__dot" />
              HTML5 · JS
            </span>
            <span className="tech-float tech-float--python" aria-hidden="true">
              <span className="tech-float__dot" />
              PYTHON
            </span>
            <span className="tech-float tech-float--mysql" aria-hidden="true">
              <span className="tech-float__dot" />
              MYSQL
            </span>

            <span className="portrait__coords" aria-hidden="true">
              04° 35' N · 74° 04' W
            </span>
          </div>
        </div>
      </div>

      <div className="container hero__bottom" data-reveal style={revealStyle(620)}>
        <a className="hero__scroll" href="#sobre-mi">
          <span className="hero__scroll-line" aria-hidden="true" />
          Desliza para explorar
        </a>
        <span className="hero__bottom-note" aria-hidden="true">
          <span className="hero__bottom-dot" /> Portafolio · 2026
        </span>
      </div>
    </section>
  )
}
