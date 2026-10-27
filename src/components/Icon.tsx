import type { SVGProps } from 'react'

export type IconName =
  | 'arrow-up-right'
  | 'arrow-right'
  | 'arrow-down'
  | 'arrow-up'
  | 'mail'
  | 'github'
  | 'whatsapp'
  | 'download'
  | 'menu'
  | 'close'
  | 'copy'
  | 'check'
  | 'terminal'
  | 'code'
  | 'spark'
  | 'puzzle'
  | 'compass'
  | 'message'
  | 'decision'
  | 'users'
  | 'shield'
  | 'school'
  | 'graduation'
  | 'map-pin'
  | 'database'
  | 'layers'
  | 'external'
  | 'chevron-up'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: number
}

export function Icon({ name, size = 20, ...props }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
    ...props,
  }

  switch (name) {
    case 'arrow-up-right':
      return (
        <svg {...common}>
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg {...common}>
          <path d="M4 12h16m-6-6 6 6-6 6" />
        </svg>
      )
    case 'arrow-down':
      return (
        <svg {...common}>
          <path d="M12 4v16m-6-6 6 6 6-6" />
        </svg>
      )
    case 'arrow-up':
      return (
        <svg {...common}>
          <path d="M12 20V4m-6 6 6-6 6 6" />
        </svg>
      )
    case 'chevron-up':
      return (
        <svg {...common}>
          <path d="m6 15 6-6 6 6" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 7 8.5 6 8.5-6" />
        </svg>
      )
    case 'download':
      return (
        <svg {...common}>
          <path d="M12 3v12m-5-5 5 5 5-5M4 20h16" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      )
    case 'github':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      )
    case 'copy':
      return (
        <svg {...common}>
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <path d="m5 12.5 4.2 4.2L19 6.8" />
        </svg>
      )
    case 'terminal':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="m7 9 3 3-3 3m6 0h4" />
        </svg>
      )
    case 'code':
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14" />
        </svg>
      )
    case 'spark':
      return (
        <svg {...common}>
          <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'puzzle':
      return (
        <svg {...common}>
          <path d="M10 4h4a2 2 0 0 1 2 2v2h2a2 2 0 1 1 0 4h-2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2H6a2 2 0 1 1 0-4h2V6a2 2 0 0 1 2-2Z" />
        </svg>
      )
    case 'compass':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
        </svg>
      )
    case 'message':
      return (
        <svg {...common}>
          <path d="M20 12a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3.2-.7L4 20l1.2-4a7.1 7.1 0 0 1-.7-3.2 7.5 7.5 0 0 1 7.5-8 7.5 7.5 0 0 1 8 7.2Z" />
          <path d="M8.5 11.5h.01m3.49 0h.01m3.49 0h.01" />
        </svg>
      )
    case 'decision':
      return (
        <svg {...common}>
          <path d="M6 4v7a4 4 0 0 0 4 4h8" />
          <path d="m15 12 3 3-3 3M6 4 3 7m3-3 3 3" />
        </svg>
      )
    case 'users':
      return (
        <svg {...common}>
          <path d="M16 19v-1.5a4.5 4.5 0 0 0-4.5-4.5h-3A4.5 4.5 0 0 0 4 17.5V19" />
          <circle cx="10" cy="7" r="3.5" />
          <path d="M16 4.5a3.5 3.5 0 0 1 0 6.8M20 19v-1.4a4.4 4.4 0 0 0-3-4.2" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5.5c0 4.2 2.8 7.5 7 9.5 4.2-2 7-5.3 7-9.5V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'school':
      return (
        <svg {...common}>
          <path d="M3 9.5 12 4l9 5.5-9 5.5-9-5.5Z" />
          <path d="M6 12v4.5c1.6 1.4 3.6 2.2 6 2.2s4.4-.8 6-2.2V12M21 10v5" />
        </svg>
      )
    case 'graduation':
      return (
        <svg {...common}>
          <path d="M2.5 9 12 4l9.5 5L12 14 2.5 9Z" />
          <path d="M6 11.5V16c1.7 1.3 3.7 2 6 2s4.3-.7 6-2v-4.5M21.5 9v5" />
        </svg>
      )
    case 'map-pin':
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    case 'database':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5.5" rx="7" ry="3" />
          <path d="M5 5.5v13c0 1.7 3.1 3 7 3s7-1.3 7-3v-13M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
        </svg>
      )
    case 'layers':
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
        </svg>
      )
    case 'external':
      return (
        <svg {...common}>
          <path d="M14 4h6v6m0-6-8 8" />
          <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
        </svg>
      )
    default:
      return null
  }
}
