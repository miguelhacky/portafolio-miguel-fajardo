/**
 * Datos centrales del portafolio.
 * Edita este archivo para actualizar textos, enlaces, tecnologías y proyectos.
 * No necesitas tocar los componentes para cambiar el contenido.
 */

export const profile = {
  firstName: 'Miguel',
  lastName: 'Fajardo',
  fullName: 'Miguel Ángel Fajardo Zapata',
  displayName: 'Miguel Fajardo',
  role: 'Desarrollador de software junior',
  tagline: 'Desarrollo soluciones digitales con código.',
  location: 'Colombia',
  status: {
    // Cambia enabled a false cuando no quieras mostrar la insignia.
    enabled: true,
    label: 'Disponible para oportunidades',
  },
  photo: {
    src: '/images/yo.png',
    alt: 'Retrato de Miguel Fajardo, desarrollador de software junior',
    width: 400,
    height: 400,
  },
  heroDescription:
    'Soy un desarrollador de software junior en formación, interesado en aplicaciones web, programación y bases de datos. Me gusta aprender nuevas tecnologías, resolver problemas y construir soluciones funcionales.',
  about: [
    'Soy Miguel Fajardo, desarrollador de software junior y estudiante de Análisis y Desarrollo de Software en el SENA. Mi formación me ha permitido adquirir conocimientos en programación, desarrollo web y bases de datos.',
    'Me interesa crear aplicaciones útiles, explorar nuevas tecnologías y mejorar continuamente mis habilidades mediante proyectos prácticos.',
  ],
  typedPhrases: [
    'Desarrollador de software.',
    'Apasionado por la tecnología.',
    'Constructor de aplicaciones web.',
    'Siempre aprendiendo algo nuevo.',
  ],
  github: 'https://github.com/miguelhacky',
  // El correo solo se muestra cuando existe una dirección real.
  // Puedes definirlo aquí o mediante VITE_CONTACT_EMAIL en un archivo .env.
  email: (import.meta.env.VITE_CONTACT_EMAIL ?? '').trim(),
  // Opcional: endpoint de un servicio como Formspree para activar el formulario.
  // También puedes usar VITE_FORM_ENDPOINT en un archivo .env.
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT ?? '').trim(),
  // Hoja de vida real, servida desde public/documentos/.
  // VITE_RESUME_URL puede sobrescribir la ruta si el archivo cambia de ubicación.
  resumeUrl:
    (import.meta.env.VITE_RESUME_URL || '/documentos/hoja-de-vida-miguel-fajardo.pdf').trim(),
  // Nombre exacto con el que el navegador guardará el archivo.
  resumeFileName: 'Hoja de vida de Miguel Fajardo.pdf',
  whatsapp: {
    display: '+57 300 3867662',
    // Enlace directo con el mensaje ya codificado. El envío se confirma en WhatsApp.
    url: 'https://wa.me/573003867662?text=Hola%20Miguel%21%2C%20como%20estas',
  },
} as const

export type NavItem = {
  id: string
  label: string
  index: string
}

export const navItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio', index: '01' },
  { id: 'sobre-mi', label: 'Sobre mí', index: '02' },
  { id: 'habilidades', label: 'Habilidades', index: '03' },
  { id: 'proyectos', label: 'Proyectos', index: '04' },
  { id: 'educacion', label: 'Educación', index: '05' },
  { id: 'contacto', label: 'Contacto', index: '06' },
]

export type Skill = {
  name: string
  category: string
  description: string
  logo: string
  accent: string
}

export const skills: Skill[] = [
  {
    name: 'HTML5',
    category: 'Desarrollo web',
    description: 'Estructura semántica y accesible para interfaces web.',
    logo: '/icons/tech/html5.svg',
    accent: '#e34f26',
  },
  {
    name: 'Python',
    category: 'Programación',
    description: 'Lógica, automatización y análisis de datos.',
    logo: '/icons/tech/python.svg',
    accent: '#5a9fd4',
  },
  {
    name: 'JavaScript',
    category: 'Desarrollo web',
    description: 'Interactividad, lógica del cliente y consumo de APIs.',
    logo: '/icons/tech/javascript.svg',
    accent: '#f7df1e',
  },
  {
    name: 'MySQL',
    category: 'Bases de datos',
    description: 'Modelado de datos, relaciones y consultas SQL.',
    logo: '/icons/tech/mysql.svg',
    accent: '#5b9bd5',
  },
  {
    name: 'Git',
    category: 'Control de versiones',
    description: 'Seguimiento de cambios y organización del historial.',
    logo: '/icons/tech/git.svg',
    accent: '#f05032',
  },
]

export const additionalStack = [
  'Node.js',
  'Express',
  'Django',
  'Bootstrap',
  'Chart.js',
  'pandas',
  'scikit-learn',
  'SQLite',
]

export type Project = {
  id: string
  index: string
  eyebrow: string
  title: string
  description: string
  features: string[]
  stack: string[]
  demo: string
  repo: string
  visual: 'restaurant' | 'clinic'
  /** Añade aquí la ruta de tu captura, por ejemplo: '/images/projects/restaurante.webp'. */
  image: string | null
  imageAlt: string
}

export const projects: Project[] = [
  {
    id: 'restaurante',
    index: '01',
    eyebrow: 'Aplicación web · Gestión',
    title: 'Sistema de Gestión de Restaurante',
    description:
      'Aplicación web para la gestión de restaurantes, diseñada para centralizar procesos como menú, mesas, pedidos, facturación y ventas.',
    features: [
      'Gestión de menú, categorías, productos y mesas.',
      'Pedidos con estados, carrito por mesa y permisos por rol.',
      'Facturación, pagos y seguimiento de ventas.',
      'Pedidos a domicilio con seguimiento del cliente.',
    ],
    stack: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'JWT'],
    demo: 'https://sistema-restaurante-gamma.vercel.app/',
    repo: 'https://github.com/miguelhacky/sistema-web-restaurante',
    visual: 'restaurant',
    // Reemplaza null por la ruta de una captura real del proyecto.
    image: null,
    imageAlt: 'Captura del Sistema de Gestión de Restaurante',
  },
  {
    id: 'analitica-clinica',
    index: '02',
    eyebrow: 'Aplicación web · Datos y salud',
    title: 'Analítica Clínica',
    description:
      'Plataforma web para organizar información clínica, procesar datos y explorar indicadores y predicciones de riesgo.',
    features: [
      'Gestión de pacientes con información clínica y estados de atención.',
      'Proceso ETL para importar, limpiar y cargar datos desde CSV o Excel.',
      'Dashboard con indicadores, segmentaciones y tendencias clínicas.',
      'Entrenamiento de modelos de clasificación y predicción de riesgo.',
      'Reportes y autenticación con sesiones y tokens JWT.',
    ],
    stack: ['Python', 'Django', 'SQLite', 'pandas', 'scikit-learn', 'Chart.js', 'Bootstrap'],
    demo:
      'https://analitica-clinica-main-111vrp4po-miguelhackys-projects.vercel.app/',
    repo: 'https://github.com/miguelhacky/analitica-clinica',
    visual: 'clinic',
    // Reemplaza null por la ruta de una captura real del proyecto.
    image: null,
    imageAlt: 'Captura de la plataforma Analítica Clínica',
  },
]

export type EducationItem = {
  level: string
  title: string
  institution: string
  status?: string
  description: string
  icon: 'terminal' | 'code' | 'school'
}

export const education: EducationItem[] = [
  {
    level: 'Formación actual',
    title: 'Tecnólogo en Análisis y Desarrollo de Software',
    institution: 'SENA',
    status: 'En curso',
    description:
      'Formación en análisis, diseño y desarrollo de software, con énfasis en programación, bases de datos y construcción de aplicaciones.',
    icon: 'terminal',
  },
  {
    level: 'Formación anterior',
    title: 'Técnico en Programación de Software',
    institution: 'Institución Educativa Jorge Isaacs',
    description:
      'Bases de programación, lógica computacional y desarrollo de software.',
    icon: 'code',
  },
  {
    level: 'Bachillerato',
    title: 'Educación media',
    institution: 'Institución Educativa Jorge Isaacs',
    description: 'Formación escolar y fundamentos académicos.',
    icon: 'school',
  },
]

export type SoftSkill = {
  name: string
  description: string
  icon:
    | 'compass'
    | 'message'
    | 'decision'
    | 'users'
    | 'shield'
    | 'spark'
    | 'puzzle'
}

export const softSkills: SoftSkill[] = [
  {
    name: 'Liderazgo',
    description: 'Asumir responsabilidades y acompañar al equipo hacia un objetivo.',
    icon: 'compass',
  },
  {
    name: 'Comunicación',
    description: 'Compartir ideas con claridad y escuchar a las demás personas.',
    icon: 'message',
  },
  {
    name: 'Toma de decisiones',
    description: 'Evaluar alternativas y elegir el camino más útil.',
    icon: 'decision',
  },
  {
    name: 'Trabajo en equipo',
    description: 'Colaborar, coordinar y construir con otras personas.',
    icon: 'users',
  },
  {
    name: 'Responsabilidad',
    description: 'Cumplir lo que asumo y cuidar la calidad del trabajo.',
    icon: 'shield',
  },
  {
    name: 'Aprendizaje continuo',
    description: 'Explorar nuevas herramientas y mejorar con cada proyecto.',
    icon: 'spark',
  },
  {
    name: 'Resolución de problemas',
    description: 'Analizar un reto, dividirlo y buscar una solución práctica.',
    icon: 'puzzle',
  },
]

export const aboutHighlights = [
  {
    title: 'Formación en software',
    description: 'Análisis y Desarrollo de Software en el SENA, con bases previas en programación.',
    icon: 'terminal' as const,
  },
  {
    title: 'Interés por programar',
    description: 'Aplicaciones web, lógica de programación y construcción de soluciones funcionales.',
    icon: 'code' as const,
  },
  {
    title: 'Aprendizaje continuo',
    description: 'Nuevas tecnologías y mejora de habilidades mediante proyectos prácticos.',
    icon: 'spark' as const,
  },
  {
    title: 'Resolución de problemas',
    description: 'Entender el contexto, dividir el reto y avanzar hacia una solución clara.',
    icon: 'puzzle' as const,
  },
]

export const siteMeta = {
  title: 'Miguel Fajardo | Desarrollador de Software',
  description:
    'Portafolio de Miguel Fajardo, desarrollador de software junior y estudiante de ADSO en el SENA. Proyectos web, programación, bases de datos y aprendizaje continuo.',
  locale: 'es_CO',
}
