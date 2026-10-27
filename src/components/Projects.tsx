import { projects } from '../data/portfolio'
import { revealStyle } from '../lib/reveal'
import { Icon } from './Icon'
import { ProjectVisual } from './ProjectVisual'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="proyectos" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Proyectos"
          title={
            <span id="projects-title">
              Proyectos <span className="text-gradient">destacados</span>
            </span>
          }
          description="Soluciones que he desarrollado para poner en práctica mis conocimientos."
        />

        <div className="projects__list">
          {projects.map((project, index) => (
            <article
              className={`project-card ${index % 2 === 1 ? 'project-card--reverse' : ''}`}
              key={project.id}
              data-reveal
              style={revealStyle(80 + index * 80)}
            >
              <div className="project-card__visual">
                <ProjectVisual
                  title={project.title}
                  visual={project.visual}
                  image={project.image}
                  imageAlt={project.imageAlt}
                />
              </div>

              <div className="project-card__body">
                <div className="project-card__topline">
                  <span className="project-card__index">/{project.index}</span>
                  <span className="project-card__eyebrow">{project.eyebrow}</span>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <ul className="project-card__features" aria-label={`Características de ${project.title}`}>
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span className="project-card__check" aria-hidden="true">
                        <Icon name="check" size={12} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <ul className="project-card__stack" aria-label={`Tecnologías de ${project.title}`}>
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="project-card__actions">
                  <a
                    className="btn btn--primary btn--small"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto
                    <Icon name="external" size={16} />
                    <span className="sr-only"> (se abre en una nueva pestaña)</span>
                  </a>
                  <a
                    className="btn btn--secondary btn--small"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" size={16} />
                    Ver código
                    <span className="sr-only"> (se abre en una nueva pestaña)</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="projects__note" data-reveal style={revealStyle(180)}>
          <Icon name="github" size={16} />
          ¿Quieres ver más? Explora mis repositorios en{' '}
          <a href="https://github.com/miguelhacky" target="_blank" rel="noopener noreferrer">
            GitHub
            <span className="sr-only"> (se abre en una nueva pestaña)</span>
          </a>
          .
        </p>
      </div>
    </section>
  )
}
