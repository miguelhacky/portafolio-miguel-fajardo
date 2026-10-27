import { useEffect, useRef, useState, type FormEvent } from 'react'
import { profile } from '../data/portfolio'
import { revealStyle } from '../lib/reveal'
import { Icon } from './Icon'

type ContactFields = {
  name: string
  email: string
  message: string
}

type ContactErrors = Partial<Record<keyof ContactFields, string>>

const EMPTY_FIELDS: ContactFields = { name: '', email: '', message: '' }

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copyTimer = useRef<number | undefined>(undefined)
  const hasEmail = profile.email.trim().length > 0
  const hasForm = profile.formEndpoint.trim().length > 0

  useEffect(() => {
    return () => {
      if (copyTimer.current) window.clearTimeout(copyTimer.current)
    }
  }, [])

  const copyEmail = async () => {
    if (!hasEmail) return
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      if (copyTimer.current) window.clearTimeout(copyTimer.current)
      copyTimer.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contacto" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__panel" data-reveal style={revealStyle(60)}>
          <span className="contact__glow contact__glow--one" aria-hidden="true" />
          <span className="contact__glow contact__glow--two" aria-hidden="true" />
          <span className="contact__grid" aria-hidden="true" />

          <div className="contact__content">
            <p className="contact__eyebrow">
              <span className="contact__index">06</span>
              <span className="contact__rule" aria-hidden="true" />
              <span>Contacto</span>
            </p>

            <h2 id="contact-title">
              ¿Tienes un proyecto
              <br />
              <span className="text-gradient">en mente?</span>
            </h2>

            <p className="contact__description">
              Estoy interesado en seguir aprendiendo, participar en nuevos proyectos y encontrar
              oportunidades para crecer en el desarrollo de software.
            </p>

            <div className="contact__actions">
              <a
                className="btn btn--whatsapp"
                href={profile.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={19} />
                Contactar por WhatsApp
                <span className="sr-only"> (se abre en WhatsApp o WhatsApp Web)</span>
              </a>

              <a
                className="btn btn--secondary"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" size={18} />
                Visitar mi GitHub
                <span className="sr-only"> (se abre en una nueva pestaña)</span>
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

              {hasEmail ? (
                <a className="btn btn--secondary" href={`mailto:${profile.email}`}>
                  <Icon name="mail" size={18} />
                  Escribirme
                </a>
              ) : null}
            </div>

            <p className="contact__availability">
              <span className="contact__availability-dot" aria-hidden="true" />
              {profile.status.enabled ? profile.status.label : 'Aprendiendo y construyendo'}
              <span className="contact__availability-separator" aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          <aside className="contact__card" aria-label="Canales y datos de contacto">
            <div className="contact__card-head">
              <span>Canales</span>
              <span className="contact__card-status">
                <span aria-hidden="true" />
                {profile.status.enabled ? 'Abierto' : 'En formación'}
              </span>
            </div>

            <a
              className="contact__channel"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__channel-icon">
                <Icon name="github" size={20} />
              </span>
              <span className="contact__channel-copy">
                <small>GitHub</small>
                <strong>@miguelhacky</strong>
              </span>
              <Icon name="arrow-up-right" size={18} />
            </a>

            <a
              className="contact__channel contact__channel--whatsapp"
              href={profile.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__channel-icon">
                <Icon name="whatsapp" size={20} />
              </span>
              <span className="contact__channel-copy">
                <small>WhatsApp</small>
                <strong>{profile.whatsapp.display}</strong>
              </span>
              <Icon name="arrow-up-right" size={18} />
            </a>

            {hasEmail ? (
              <div className="contact__channel contact__channel--email">
                <a className="contact__channel-main" href={`mailto:${profile.email}`}>
                  <span className="contact__channel-icon">
                    <Icon name="mail" size={20} />
                  </span>
                  <span className="contact__channel-copy">
                    <small>Correo</small>
                    <strong>{profile.email}</strong>
                  </span>
                </a>
                <button
                  type="button"
                  className="contact__copy"
                  onClick={copyEmail}
                  aria-label="Copiar dirección de correo"
                >
                  <Icon name={copied ? 'check' : 'copy'} size={16} />
                </button>
                <span className="sr-only" role="status">
                  {copied ? 'Correo copiado al portapapeles' : ''}
                </span>
              </div>
            ) : null}

            <div className="contact__meta">
              <span>
                <Icon name="map-pin" size={16} />
                {profile.location}
              </span>
              <span>
                <Icon name="graduation" size={16} />
                SENA · ADSO
              </span>
            </div>

            <div className="contact__code">
              <div className="contact__code-bar" aria-hidden="true">
                <span />
                <span />
                <span />
                <small>profile.json</small>
              </div>
              <pre aria-hidden="true">
                <code>
                  <span className="code-key">"based_in"</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">"Colombia"</span>
                  <span className="code-punct">,</span>
                  {'\n'}
                  <span className="code-key">"focus"</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">"desarrollo web"</span>
                  <span className="code-punct">,</span>
                  {'\n'}
                  <span className="code-key">"open_to"</span>
                  <span className="code-punct">: [</span>
                  {'\n  '}
                  <span className="code-string">"aprender"</span>
                  <span className="code-punct">, </span>
                  <span className="code-string">"proyectos"</span>
                  <span className="code-punct">,</span>
                  {'\n  '}
                  <span className="code-string">"oportunidades"</span>
                  {'\n'}
                  <span className="code-punct">]</span>
                </code>
              </pre>
            </div>

            {!hasEmail && !hasForm ? (
              <p className="contact__hint">
                <Icon name="message" size={15} />
                Escríbeme por WhatsApp o revisa mis repositorios. El correo y el formulario se
                activarán cuando estén configurados.
              </p>
            ) : null}

            {hasForm ? <ContactForm /> : null}
          </aside>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(EMPTY_FIELDS)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const updateField = (field: keyof ContactFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status !== 'idle') {
      setStatus('idle')
      setFeedback('')
    }
  }

  const validate = (): ContactErrors => {
    const nextErrors: ContactErrors = {}

    if (fields.name.trim().length < 2) {
      nextErrors.name = 'Escribe tu nombre (mínimo 2 caracteres).'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
      nextErrors.email = 'Escribe un correo electrónico válido.'
    }

    if (fields.message.trim().length < 10) {
      nextErrors.message = 'Cuéntame un poco más (mínimo 10 caracteres).'
    }

    return nextErrors
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setFeedback('Revisa los campos marcados antes de enviar.')
      return
    }

    setStatus('sending')
    setFeedback('Enviando mensaje…')

    try {
      const response = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        }),
      })

      if (!response.ok) throw new Error('No se pudo enviar el mensaje.')

      setStatus('success')
      setFeedback('Mensaje enviado. Gracias por escribirme.')
      setFields(EMPTY_FIELDS)
    } catch {
      setStatus('error')
      setFeedback('No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por GitHub.')
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <p className="contact-form__title">Cuéntame sobre tu idea</p>

      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="contact-name">Nombre</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => updateField('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            placeholder="Tu nombre"
          />
          {errors.name ? (
            <span className="field__error" id="contact-name-error">
              {errors.name}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="contact-email">Correo</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => updateField('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            placeholder="tu@correo.com"
          />
          {errors.email ? (
            <span className="field__error" id="contact-email-error">
              {errors.email}
            </span>
          ) : null}
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={fields.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          placeholder="Cuéntame qué tienes en mente…"
        />
        {errors.message ? (
          <span className="field__error" id="contact-message-error">
            {errors.message}
          </span>
        ) : null}
      </div>

      <button className="btn btn--primary btn--full" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
        <Icon name="arrow-up-right" size={17} />
      </button>

      <p
        className={`contact-form__feedback contact-form__feedback--${status}`}
        role="status"
        aria-live="polite"
      >
        {feedback}
      </p>
    </form>
  )
}
