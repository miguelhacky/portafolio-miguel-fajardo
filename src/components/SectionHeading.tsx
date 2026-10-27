import type { ReactNode } from 'react'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: ReactNode
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal>
      <div className="section-heading__meta">
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__rule" aria-hidden="true" />
        <span className="section-heading__eyebrow">{eyebrow}</span>
      </div>
      <h2 className="section-heading__title">{title}</h2>
      <p className="section-heading__description">{description}</p>
    </div>
  )
}
