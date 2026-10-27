/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Correo real que se mostrará en la sección de contacto y en el botón "Escribirme". */
  readonly VITE_CONTACT_EMAIL?: string
  /** Endpoint HTTP (Formspree u otro) que activa el formulario de contacto. */
  readonly VITE_FORM_ENDPOINT?: string
  /** Ruta pública del archivo de hoja de vida, por ejemplo /docs/cv-miguel-fajardo.pdf. */
  readonly VITE_RESUME_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
