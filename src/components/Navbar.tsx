import { useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { Icon } from './Icon'

const SECTION_IDS = navItems.map((item) => item.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 961px)')
    const onChange = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`

    const panel = menuPanelRef.current
    const menuButton = menuButtonRef.current
    const focusable = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    const first = focusable?.[0]
    const last = focusable?.[focusable.length - 1]
    first?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }

      if (event.key !== 'Tab' || !focusable?.length || !first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      document.removeEventListener('keydown', onKeyDown)
      menuButton?.focus({ preventScroll: true })
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="site-header__inner">
        <a className="brand" href="#inicio">
          <span className="brand__mark" aria-hidden="true">
            MF
          </span>
          <span className="brand__text">
            <span className="brand__name">Miguel Fajardo</span>
            <span className="brand__role">Software Developer</span>
          </span>
          <span className="sr-only">Ir al inicio</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <ul className="desktop-nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-link ${active === item.id ? 'is-active' : ''}`}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          {profile.resumeUrl ? (
            <a
              className="btn btn--small btn--primary header-cv"
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              aria-label="Descargar CV: hoja de vida de Miguel Fajardo (PDF)"
            >
              Descargar CV
              <Icon name="download" size={16} />
            </a>
          ) : (
            <a className="btn btn--small btn--ghost header-cta" href="#contacto">
              Hablemos
              <Icon name="arrow-up-right" size={16} />
            </a>
          )}

          <button
            type="button"
            className="menu-toggle"
            ref={menuButtonRef}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            onClick={() => setOpen((current) => !current)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-menu" id="mobile-navigation" ref={menuPanelRef}>
          <div className="mobile-menu__bg" aria-hidden="true" />
          <nav className="mobile-menu__nav" aria-label="Navegación móvil">
            <p className="mobile-menu__label">Navegación</p>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`mobile-menu__link ${active === item.id ? 'is-active' : ''}`}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    aria-current={active === item.id ? 'location' : undefined}
                  >
                    <span className="mobile-menu__index">{item.index}</span>
                    <span>{item.label}</span>
                    <Icon name="arrow-up-right" size={22} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu__footer">
            <a
              className="mobile-menu__social"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Icon name="github" size={18} />
              github.com/miguelhacky
              <Icon name="external" size={15} />
            </a>
            <a className="btn btn--primary btn--full" href="#contacto" onClick={closeMenu}>
              Hablemos de un proyecto
              <Icon name="arrow-up-right" size={17} />
            </a>
            <p className="mobile-menu__location">
              <Icon name="map-pin" size={15} /> Colombia · Disponible para aprender
            </p>
          </div>
        </div>
      ) : null}
    </header>
  )
}
