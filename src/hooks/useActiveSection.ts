import { useEffect, useState } from 'react'

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const marker = window.scrollY + window.innerHeight * 0.32
      let current = ids[0] ?? ''

      for (const id of ids) {
        const section = document.getElementById(id)
        if (!section) continue
        if (section.offsetTop <= marker) current = id
      }

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
      if (nearBottom) current = ids[ids.length - 1] ?? current

      setActive((previous) => (previous === current ? previous : current))
    }

    const schedule = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}
