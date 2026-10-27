import type { CSSProperties } from 'react'
import { additionalStack, skills } from '../data/portfolio'
import { revealStyle } from '../lib/reveal'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="habilidades" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Habilidades"
          title={
            <span id="skills-title">
              Mi stack <span className="text-gradient">tecnológico</span>
            </span>
          }
          description="Tecnologías que utilizo y sigo aprendiendo."
        />

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <article
              className="skill-card"
              key={skill.name}
              data-reveal
              style={
                {
                  ...revealStyle(70 + index * 70),
                  '--skill-accent': skill.accent,
                  '--logo-delay': `${index * -0.9}s`,
                } as CSSProperties
              }
            >
              <div className="skill-card__head">
                <span className="skill-card__logo">
                  <img
                    src={skill.logo}
                    alt={`Logotipo de ${skill.name}`}
                    width={42}
                    height={42}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="skill-card__number" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>

              <div className="skill-card__body">
                <div className="skill-card__title-row">
                  <h3>{skill.name}</h3>
                  <span className="skill-card__category">{skill.category}</span>
                </div>
                <p>{skill.description}</p>
              </div>

              <span className="skill-card__line" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="stack-extra" data-reveal style={revealStyle(160)}>
          <div className="stack-extra__label">
            <Icon name="layers" size={17} />
            <span>También presente en mis proyectos</span>
          </div>
          <ul className="stack-extra__list" aria-label="Otras tecnologías utilizadas en proyectos">
            {additionalStack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <p className="stack-extra__note">Herramientas que he explorado al construir y probar mis proyectos.</p>
        </div>
      </div>
    </section>
  )
}
