import { aboutHighlights, profile } from '../data/portfolio'
import { revealStyle } from '../lib/reveal'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

const focusPoints = [
  'Entender el problema antes de escribir código.',
  'Construir soluciones claras, útiles y funcionales.',
  'Aprender de cada proyecto y seguir mejorando.',
]

export function About() {
  return (
    <section id="sobre-mi" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Sobre mí"
          title={
            <span id="about-title">
              Sobre <span className="text-gradient">mí</span>
            </span>
          }
          description="Conoce un poco más sobre mi camino en el desarrollo de software."
        />

        <div className="about__grid">
          <div className="about__copy">
            <div data-reveal style={revealStyle(80)}>
              {profile.about.map((paragraph) => (
                <p className="about__paragraph" key={paragraph.slice(0, 32)}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about__focus" data-reveal style={revealStyle(160)}>
              <p className="about__focus-title">
                <span className="about__focus-line" aria-hidden="true" />
                Mi enfoque
              </p>
              <ul className="about__focus-list">
                {focusPoints.map((point) => (
                  <li key={point}>
                    <span className="about__focus-icon" aria-hidden="true">
                      <Icon name="check" size={13} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about__signature" data-reveal style={revealStyle(230)}>
              <span className="about__signature-mark" aria-hidden="true">
                MF
              </span>
              <div>
                <strong>{profile.fullName}</strong>
                <span>{profile.role} · {profile.location}</span>
              </div>
            </div>
          </div>

          <div className="about__cards">
            {aboutHighlights.map((item, index) => (
              <article
                className="feature-card"
                key={item.title}
                data-reveal
                style={revealStyle(100 + index * 85)}
              >
                <span className="feature-card__icon" aria-hidden="true">
                  <Icon name={item.icon} size={21} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="feature-card__index" aria-hidden="true">
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="about__strip" data-reveal style={revealStyle(200)}>
          <div className="about__strip-item">
            <Icon name="graduation" size={18} />
            <span>
              <small>Formación actual</small>
              ADSO · SENA
            </span>
          </div>
          <div className="about__strip-item">
            <Icon name="layers" size={18} />
            <span>
              <small>Enfoque</small>
              Desarrollo web y datos
            </span>
          </div>
          <div className="about__strip-item">
            <Icon name="map-pin" size={18} />
            <span>
              <small>Ubicación</small>
              {profile.location}
            </span>
          </div>
          <div className="about__strip-item">
            <Icon name="spark" size={18} />
            <span>
              <small>Actitud</small>
              Aprender y construir
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
