# Portafolio · Miguel Fajardo

Portafolio personal de **Miguel Ángel Fajardo Zapata**, desarrollador de software
junior y estudiante de Análisis y Desarrollo de Software (ADSO) en el SENA,
Colombia.

**En vivo:** <https://portafolio-omega-gilt-26.vercel.app>

Sitio de una sola página, responsive y con estética oscura premium: negro y azul
profundo, violeta y azul eléctrico, tipografía display, partículas, retrato con
detalles técnicos y microinteracciones. Todo el contenido real vive en un único
archivo de datos.

---

## Stack

| Área | Tecnología |
| --- | --- |
| Base | React 19 + TypeScript + Vite 8 |
| Estilos | CSS modular propio (tokens, secciones y responsive) |
| Tipografía | Space Grotesk Variable + Manrope Variable (`@fontsource-variable`) |
| Iconografía | SVG propios + logotipos locales de tecnologías |
| Animación | CSS, IntersectionObserver, canvas de partículas y typewriter |
| Checks | TypeScript estricto, ESLint 9 y build de Vite |

No se utilizan librerías pesadas de animación ni de iconos. Los logotipos de
HTML5, Python, JavaScript, MySQL y Git son SVG locales en
`public/icons/tech/`.

---

## Comandos

Requiere **Node.js 20.19+** (recomendado 22 LTS).

```bash
npm install        # instalar dependencias
npm run dev        # servidor local (http://localhost:5173)
npm run typecheck  # TypeScript sin emitir archivos
npm run lint       # ESLint
npm run build      # typecheck + build de producción en dist/
npm run preview    # probar el build localmente
```

---

## Estructura

```text
.
├─ index.html                  Metadatos, Open Graph, JSON-LD
├─ public/
│  ├─ documentos/              Hoja de vida real en PDF
│  ├─ images/yo.png            Retrato real (400 × 400)
│  ├─ images/projects/         Capturas reales cuando existan
│  ├─ icons/tech/              Logotipos SVG locales (incluye WhatsApp)
│  ├─ favicon.svg
│  ├─ apple-touch-icon.png
│  └─ og-image.png
├─ src/
│  ├─ data/portfolio.ts        ← contenido editable
│  ├─ components/              Secciones y piezas de UI
│  ├─ hooks/                   Typewriter, reveal, sección activa, motion
│  ├─ styles/                  Sistema visual completo
│  ├─ App.tsx
│  └─ main.tsx
└─ .env.example                Configuración opcional
```

---

## Cómo editar el contenido

### Textos, enlaces y datos

Todo el contenido está en **`src/data/portfolio.ts`**:

- `profile`: nombre, rol, descripción, ubicación, GitHub, foto, estado.
- `typedPhrases`: frases del efecto de escritura del hero.
- `skills`: tecnologías principales con su logotipo y descripción.
- `additionalStack`: herramientas secundarias.
- `projects`: proyectos, características verificadas, stack, demo y repositorio.
- `education`: formación y estado.
- `softSkills`: habilidades personales (sin porcentajes inventados).

### Foto

Reemplaza `public/images/yo.png` por otra foto cuadrada (ideal 400 × 400 o
mayor). Mantén el mismo nombre de archivo o actualiza `profile.photo.src`,
`width`, `height` y `alt` en `src/data/portfolio.ts`.

### Capturas de los proyectos

Las tarjetas muestran una **vista conceptual** claramente etiquetada porque no
había capturas reales utilizables de las demos. Para usar una captura real:

1. Guarda la imagen en `public/images/projects/` (por ejemplo
   `restaurante.webp`, relación 16 / 11, menos de 400 KB).
2. En `src/data/portfolio.ts`, cambia `image: null` por
   `image: '/images/projects/restaurante.webp'`.
3. Actualiza `imageAlt` con una descripción real.

No se presentan maquetas como capturas auténticas.

### Hoja de vida

La hoja de vida real vive en
`public/documentos/hoja-de-vida-miguel-fajardo.pdf` y se sirve en
`/documentos/hoja-de-vida-miguel-fajardo.pdf`. Hay tres accesos: header
(«Descargar CV»), hero y Contacto («Descargar hoja de vida»).

- `profile.resumeUrl`: ruta del PDF (por defecto la anterior).
- `profile.resumeFileName`: nombre exacto de descarga,
  `Hoja de vida de Miguel Fajardo.pdf`. Los enlaces usan el atributo `download`
  con ese valor, por lo que el navegador guarda el archivo con ese nombre.
- `VITE_RESUME_URL`: sobrescribe la ruta si mueves el archivo. El nombre de
  descarga se cambia en `profile.resumeFileName`.

Para reemplazar el documento, sobrescribe el PDF manteniendo el nombre o ajusta
`profile.resumeUrl`. No se inventó ninguna hoja de vida: es el archivo real
aportado por Miguel.

### WhatsApp

El número y el mensaje están centralizados en `profile.whatsapp`
(`src/data/portfolio.ts`):

- Visible: **+57 300 3867662**.
- Enlace exacto:
  `https://wa.me/573003867662?text=Hola%20Miguel%21%2C%20como%20estas`.

Se usa en el botón principal de Contacto, en la tarjeta de canal y en el botón
flotante (esquina inferior derecha). Todos abren WhatsApp o WhatsApp Web en una
pestaña nueva y **no envían nada automáticamente**: el mensaje se confirma dentro
de WhatsApp.

El botón flotante comprueba su posición: si quedaría encima de un enlace, botón
o campo, se oculta (con `pointer-events: none` y sin foco) y reaparece cuando la
zona vuelve a estar libre. Así no bloquea otros controles al hacer scroll.

### Correo y formulario (opcionales)

El correo y el formulario permanecen **ocultos** mientras no existan datos
reales. Para activarlos:

1. Copia `.env.example` como `.env`.
2. Completa solo lo que ya tengas:
   - `VITE_CONTACT_EMAIL`: correo público real.
   - `VITE_FORM_ENDPOINT`: endpoint de Formspree u otro servicio.

También puedes escribir esos valores directamente en `src/data/portfolio.ts`.
No se han inventado correos ni formularios.

### Estado «Disponible para oportunidades»

Se controla con `profile.status.enabled` y `profile.status.label`. Cambia
`enabled` a `false` para ocultar la insignia.

---

## Diseño y accesibilidad

- Breakpoints comprobados en 375, 430, 768, 1366, 1920 px.
- Navegación fija, sección activa por scroll y menú móvil con bloqueo de scroll,
  cierre con `Escape` y foco atrapado.
- Enlace «Saltar al contenido», estados de foco visibles, etiquetas ARIA y
  textos alternativos reales.
- Animaciones desactivadas con `prefers-reduced-motion`; el canvas de partículas
  no se inicia en ese caso. Las animaciones nuevas (logos, retrato, glows,
  botones y WhatsApp flotante) solo usan `transform` y `opacity`.
- Botones de CV y WhatsApp con degradados sutiles, estados hover/focus y
  contraste legible; el botón flotante de WhatsApp no se superpone a los
  controles ni al contenido del footer.
- Enlaces externos con `rel="noopener noreferrer"` y aviso para lectores de
  pantalla.
- Sin desbordamiento horizontal: `overflow-x: clip`, grids con `minmax(0, 1fr)` y
  bloques de código con scroll interno.

---

## Proyectos enlazados

| Proyecto | Demo | Código |
| --- | --- | --- |
| Sistema de Gestión de Restaurante | [demo](https://sistema-restaurante-gamma.vercel.app/) | [repo](https://github.com/miguelhacky/sistema-web-restaurante) |
| Analítica Clínica | [demo](https://analitica-clinica-main-111vrp4po-miguelhackys-projects.vercel.app/) | [repo](https://github.com/miguelhacky/analitica-clinica) |

> Las URLs son las reales del portafolio. El backend del restaurante puede estar
> fuera de línea y la demo clínica puede redirigir al inicio de sesión de Vercel;
> por eso no se usaron capturas inventadas ni se promete que las demos estén
> siempre activas.

---

## Despliegue en Vercel

- **Sitio en producción:** <https://portafolio-omega-gilt-26.vercel.app>
- **Repositorio:** <https://github.com/miguelhacky/portafolio-miguel-fajardo>

1. Sube el proyecto a un repositorio de GitHub.
2. En Vercel, importa el repositorio.
3. Configura:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. Añade las variables de entorno opcionales si las usas (no son obligatorias).
5. Despliega. No se necesitan rewrites porque el sitio es una sola página.

También puedes desplegar desde la terminal con `vercel --prod`. El dominio final
ya está configurado en `index.html` (`canonical`, `og:url` y `og:image`); si
cambias de dominio, actualiza esas tres URLs.

### Otros hostings

Cualquier hosting estático sirve: ejecuta `npm run build` y publica `dist/`.
Comprueba que las rutas absolutas (`/images/...`, `/icons/...`) se resuelvan
desde la raíz del dominio.

---

## Verificación recomendada antes de publicar

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

Revisa además:

- Que la foto y los logotipos carguen.
- Que la hoja de vida descargue desde header, hero y Contacto con el nombre
  `Hoja de vida de Miguel Fajardo.pdf` y siga siendo un PDF válido.
- Que el botón, la tarjeta y el flotante de WhatsApp abran el enlace
  `wa.me/573003867662` con el mensaje codificado (sin envío automático).
- Que el botón flotante de WhatsApp no tape el botón «volver arriba», el footer
  ni otros controles en móvil y escritorio.
- Que los enlaces de demo y repositorio abran en una pestaña nueva.
- Que el menú móvil se abra, cierre con `Escape` y no deje el scroll bloqueado.
- Que no haya scroll horizontal en 375, 430, 768, 1366 y 1920 px.
- Que el sitio siga siendo usable con `prefers-reduced-motion: reduce`.
