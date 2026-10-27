import { useEffect, useState } from 'react'

export function useTypewriter(phrases: readonly string[], enabled = true) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [characterIndex, setCharacterIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const phrase = phrases[phraseIndex] ?? ''

    if (!deleting && characterIndex === phrase.length) {
      const pause = window.setTimeout(() => setDeleting(true), 1900)
      return () => window.clearTimeout(pause)
    }

    if (deleting && characterIndex === 0) {
      const pause = window.setTimeout(() => {
        setDeleting(false)
        setPhraseIndex((current) => (current + 1) % phrases.length)
      }, 340)
      return () => window.clearTimeout(pause)
    }

    const delay = deleting ? 34 : 62
    const timer = window.setTimeout(() => {
      setCharacterIndex((current) => current + (deleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [characterIndex, deleting, enabled, phraseIndex, phrases])

  if (!enabled) return phrases[0] ?? ''
  return (phrases[phraseIndex] ?? '').slice(0, characterIndex)
}
