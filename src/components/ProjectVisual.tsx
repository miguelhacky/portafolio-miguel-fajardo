import type { Project } from '../data/portfolio'

type ProjectVisualProps = Pick<Project, 'title' | 'visual' | 'image' | 'imageAlt'>

export function ProjectVisual({ title, visual, image, imageAlt }: ProjectVisualProps) {
  if (image) {
    return (
      <div className="project-visual project-visual--image">
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      </div>
    )
  }

  return visual === 'restaurant' ? (
    <RestaurantMockup title={title} />
  ) : (
    <ClinicMockup title={title} />
  )
}

function RestaurantMockup({ title }: { title: string }) {
  const nav = ['Menú', 'Mesas', 'Pedidos', 'Facturación', 'Ventas']
  const tiles = [
    { label: 'Menú', icon: 'layers' as const },
    { label: 'Mesas', icon: 'grid' as const },
    { label: 'Pedidos', icon: 'clipboard' as const },
    { label: 'Facturación', icon: 'receipt' as const },
  ]

  return (
    <div
      className="project-visual project-visual--restaurant"
      role="img"
      aria-label={`Representación visual de la interfaz de ${title}`}
    >
      <span className="project-visual__halo" aria-hidden="true" />
      <div className="mockup">
        <div className="mockup__chrome">
          <span className="mockup__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="mockup__url">sistema-restaurante-gamma.vercel.app</span>
          <span className="mockup__chrome-badge">demo</span>
        </div>
        <div className="mockup__screen">
          <aside className="mockup__aside">
            <span className="mockup__brand">SR</span>
            <div className="mockup__aside-list">
              {nav.map((item, index) => (
                <span className={index === 0 ? 'is-active' : undefined} key={item}>
                  <span className="mockup__aside-dot" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
            <span className="mockup__aside-user" aria-hidden="true">
              <span />
              <span />
            </span>
          </aside>

          <div className="mockup__main">
            <div className="mockup__topline">
              <div className="mockup__title">
                <span className="mockup__mark">SR</span>
                <span>
                  <strong>Panel del restaurante</strong>
                  <small>Gestión centralizada</small>
                </span>
              </div>
              <span className="mockup__pill">
                <span className="mockup__pill-dot" />
                En línea
              </span>
            </div>

            <div className="mockup__tiles">
              {tiles.map((tile) => (
                <div className="mockup__tile" key={tile.label}>
                  <span className="mockup__tile-icon">
                    <MockupIcon name={tile.icon} />
                  </span>
                  <span className="mockup__tile-label">{tile.label}</span>
                  <span className="mockup__tile-bar" />
                </div>
              ))}
            </div>

            <div className="mockup__panel">
              <div className="mockup__panel-head">
                <span>Resumen de ventas</span>
                <small>Últimos 7 días</small>
              </div>
              <svg
                className="mockup__chart"
                viewBox="0 0 300 82"
                fill="none"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="restaurant-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff9a62" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="#ff9a62" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 22H300M0 45H300M0 68H300" stroke="rgba(255,255,255,.055)" />
                <path
                  d="M4 66C29 52 41 58 62 52s32 13 53 3 33-26 54-19 31 19 52 12 33-24 75-30v64H4Z"
                  fill="url(#restaurant-chart-fill)"
                />
                <path
                  d="M4 66C29 52 41 58 62 52s32 13 53 3 33-26 54-19 31 19 52 12 33-24 75-30"
                  stroke="#ff9a62"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="296" cy="18" r="2.4" fill="#ffb37f" />
              </svg>
            </div>

            <div className="mockup__rows" aria-hidden="true">
              <div className="mockup__row">
                <span className="mockup__row-chip" />
                <span className="mockup__row-text" />
                <span className="mockup__row-value" />
              </div>
              <div className="mockup__row">
                <span className="mockup__row-chip" />
                <span className="mockup__row-text" />
                <span className="mockup__row-value" />
              </div>
              <div className="mockup__row">
                <span className="mockup__row-chip" />
                <span className="mockup__row-text" />
                <span className="mockup__row-value" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="mockup__caption">
        <span aria-hidden="true" />
        Vista conceptual
      </span>
    </div>
  )
}

function ClinicMockup({ title }: { title: string }) {
  const nav = ['Dashboard', 'Pacientes', 'ETL', 'Analítica', 'Predicciones', 'Reportes']
  const tiles = [
    { label: 'Pacientes', icon: 'users' as const },
    { label: 'ETL', icon: 'database' as const },
    { label: 'Analítica', icon: 'chart' as const },
    { label: 'Predicciones', icon: 'spark' as const },
  ]

  return (
    <div
      className="project-visual project-visual--clinic"
      role="img"
      aria-label={`Representación visual de la interfaz de ${title}`}
    >
      <span className="project-visual__halo" aria-hidden="true" />
      <div className="mockup">
        <div className="mockup__chrome">
          <span className="mockup__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="mockup__url">analitica-clinica.vercel.app</span>
          <span className="mockup__chrome-badge">IPS</span>
        </div>
        <div className="mockup__screen">
          <aside className="mockup__aside">
            <span className="mockup__brand mockup__brand--clinic">HA</span>
            <div className="mockup__aside-list">
              {nav.map((item, index) => (
                <span className={index === 0 ? 'is-active' : undefined} key={item}>
                  <span className="mockup__aside-dot" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
            <span className="mockup__aside-user" aria-hidden="true">
              <span />
              <span />
            </span>
          </aside>

          <div className="mockup__main">
            <div className="mockup__topline">
              <div className="mockup__title">
                <span className="mockup__mark mockup__mark--clinic">HA</span>
                <span>
                  <strong>Dashboard clínico</strong>
                  <small>HealthAnalytics IPS</small>
                </span>
              </div>
              <span className="mockup__pill mockup__pill--clinic">
                <span className="mockup__pill-dot" />
                Analítica
              </span>
            </div>

            <div className="mockup__tiles">
              {tiles.map((tile) => (
                <div className="mockup__tile mockup__tile--clinic" key={tile.label}>
                  <span className="mockup__tile-icon">
                    <MockupIcon name={tile.icon} />
                  </span>
                  <span className="mockup__tile-label">{tile.label}</span>
                  <span className="mockup__tile-bar" />
                </div>
              ))}
            </div>

            <div className="mockup__split">
              <div className="mockup__panel">
                <div className="mockup__panel-head">
                  <span>Riesgo clínico</span>
                  <small>Segmentación</small>
                </div>
                <div className="mockup__bars" aria-hidden="true">
                  <span style={{ height: '42%' }} />
                  <span style={{ height: '68%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '84%' }} />
                  <span style={{ height: '61%' }} />
                  <span style={{ height: '35%' }} />
                </div>
              </div>

              <div className="mockup__panel">
                <div className="mockup__panel-head">
                  <span>Tendencias</span>
                  <small>Glucosa</small>
                </div>
                <svg
                  className="mockup__chart mockup__chart--short"
                  viewBox="0 0 140 78"
                  fill="none"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path d="M0 18H140M0 40H140M0 62H140" stroke="rgba(255,255,255,.055)" />
                  <path
                    d="M3 62C18 55 22 34 39 41s18 13 33 2 17-25 32-17 18 20 33 8"
                    stroke="#35d6c4"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="137" cy="34" r="2.3" fill="#68f0df" />
                </svg>
              </div>
            </div>

            <div className="mockup__rows" aria-hidden="true">
              <div className="mockup__row">
                <span className="mockup__row-chip mockup__row-chip--clinic" />
                <span className="mockup__row-text" />
                <span className="mockup__row-value" />
              </div>
              <div className="mockup__row">
                <span className="mockup__row-chip mockup__row-chip--clinic" />
                <span className="mockup__row-text" />
                <span className="mockup__row-value" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="mockup__caption">
        <span aria-hidden="true" />
        Vista conceptual
      </span>
    </div>
  )
}

type MockupIconProps = {
  name: 'layers' | 'grid' | 'clipboard' | 'receipt' | 'users' | 'database' | 'chart' | 'spark'
}

function MockupIcon({ name }: MockupIconProps) {
  if (name === 'grid') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <rect x="2" y="2" width="5" height="5" rx="1" />
        <rect x="9" y="2" width="5" height="5" rx="1" />
        <rect x="2" y="9" width="5" height="5" rx="1" />
        <rect x="9" y="9" width="5" height="5" rx="1" />
      </svg>
    )
  }

  if (name === 'clipboard') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <rect x="3" y="3" width="10" height="11" rx="1.5" />
        <path d="M6 3.5V2h4v1.5M5.5 7h5M5.5 10h3.5" />
      </svg>
    )
  }

  if (name === 'receipt') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4 1.8h8v12.4l-2-1.2-2 1.2-2-1.2-2 1.2V1.8Z" />
        <path d="M6 5h4M6 8h4" />
      </svg>
    )
  }

  if (name === 'users') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="6" cy="5" r="2.2" />
        <path d="M2.5 13v-.8A3.2 3.2 0 0 1 5.7 9h.6a3.2 3.2 0 0 1 3.2 3.2V13M11 4.2a2 2 0 0 1 0 3.7M12.8 13v-.7a2.8 2.8 0 0 0-1.7-2.6" />
      </svg>
    )
  }

  if (name === 'database') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <ellipse cx="8" cy="4" rx="4.8" ry="2" />
        <path d="M3.2 4v8c0 1.1 2.2 2 4.8 2s4.8-.9 4.8-2V4M3.2 8c0 1.1 2.2 2 4.8 2s4.8-.9 4.8-2" />
      </svg>
    )
  }

  if (name === 'chart') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2.5 13.5h11M4.5 11V7M7.5 11V4.5M10.5 11V6M13 11V3" />
      </svg>
    )
  }

  if (name === 'spark') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 1.8v2.4M8 11.8v2.4M1.8 8h2.4M11.8 8h2.4M3.7 3.7l1.7 1.7M10.6 10.6l1.7 1.7M12.3 3.7l-1.7 1.7M5.4 10.6l-1.7 1.7" />
        <circle cx="8" cy="8" r="2.1" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m8 2 5.5 3.1L8 8.2 2.5 5.1 8 2Z" />
      <path d="m2.5 8 5.5 3.1L13.5 8M2.5 11l5.5 3.1L13.5 11" />
    </svg>
  )
}
