import { navItems, profile } from '../data/portfolio'
import { Icon } from './Icon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a className="brand brand--footer" href="#inicio">
              <span className="brand__mark" aria-hidden="true">
                MF
              </span>
              <span className="brand__text">
                <span className="brand__name">Miguel Fajardo</span>
                <span className="brand__role">Desarrollador de software junior</span>
              </span>
              <span className="sr-only">Volver al inicio</span>
            </a>
            <p>Construyendo, aprendiendo y mejorando línea a línea.</p>
          </div>

          <nav className="site-footer__nav" aria-label="Navegación del pie de página">
            <p className="site-footer__label">Secciones</p>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__connect">
            <p className="site-footer__label">Conecta</p>
            <a
              className="site-footer__github"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" size={18} />
              github.com/miguelhacky
              <Icon name="external" size={14} />
              <span className="sr-only"> (se abre en una nueva pestaña)</span>
            </a>
            <span className="site-footer__location">
              <Icon name="map-pin" size={15} />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} Miguel Fajardo. Todos los derechos reservados.
          </p>
          <p className="site-footer__build">
            <span aria-hidden="true" /> Diseñado y construido con React + Vite
          </p>
          <a className="site-footer__top-link" href="#inicio">
            Volver arriba
            <Icon name="arrow-up" size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
