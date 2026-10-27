import { education, softSkills } from '../data/portfolio'
import { revealStyle } from '../lib/reveal'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="educacion" className="section education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Educación"
          title={
            <span id="education-title">
              Mi <span className="text-gradient">formación</span>
            </span>
          }
          description="Mi ruta de aprendizaje en el mundo del software."
        />

        <div className="timeline">
          <span className="timeline__line" aria-hidden="true" />
          {education.map((item, index) => (
            <article
              className={`timeline-item ${item.status ? 'timeline-item--current' : ''}`}
              key={`${item.level}-${item.title}`}
              data-reveal
              style={revealStyle(80 + index * 100)}
            >
              <div className="timeline-item__marker" aria-hidden="true">
                <Icon name={item.icon} size={20} />
              </div>

              <div className="timeline-item__card">
                <div className="timeline-item__topline">
                  <span className="timeline-item__level">{item.level}</span>
                  {item.status ? (
                    <span className="timeline-item__status">
                      <span aria-hidden="true" />
                      {item.status}
                    </span>
                  ) : (
                    <span className="timeline-item__index" aria-hidden="true">
                      0{index + 1}
                    </span>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p className="timeline-item__institution">
                  <Icon name="school" size={15} />
                  {item.institution}
                </p>
                <p className="timeline-item__description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="soft-skills" aria-labelledby="soft-skills-title">
          <div className="soft-skills__heading" data-reveal style={revealStyle(60)}>
            <div>
              <p className="soft-skills__eyebrow">
                <span aria-hidden="true" /> Más allá del código
              </p>
              <h3 id="soft-skills-title">Habilidades personales</h3>
            </div>
            <p>
              Aspectos que practico y llevo conmigo en cada proyecto, equipo y espacio de
              aprendizaje.
            </p>
          </div>

          <div className="soft-skills__grid">
            {softSkills.map((skill, index) => (
              <article
                className="soft-skill"
                key={skill.name}
                data-reveal
                style={revealStyle(60 + index * 55)}
              >
                <span className="soft-skill__icon" aria-hidden="true">
                  <Icon name={skill.icon} size={19} />
                </span>
                <div>
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </div>
                <span className="soft-skill__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
