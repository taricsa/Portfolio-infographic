"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'

type Props = {
  enabled: boolean
  label: string
}

export function IntroEmail({ enabled, label }: Props) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState<string | null>(null)

  async function handleGenerate() {
    setLoading(true)
    setContent(null)
    try {
      const response = await fetch('/api/intro-email', { method: 'POST' })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to generate')
      setContent(data.text as string)
    } catch (e: unknown) {
      setContent((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  if (!enabled) return null

  return (
    <>
      <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
        {label}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Warm Intro Email">
        <div className="space-y-4">
          <p className="text-sm text-white/80">
            This uses your `data/resume-context.json` to draft a friendly intro. No key set → feature is disabled.
          </p>
          <div className="flex gap-2">
            <Button onClick={handleGenerate} disabled={loading}>
              {loading ? 'Generating…' : 'Generate'}
            </Button>
            <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          </div>
          {content ? (
            <pre className="whitespace-pre-wrap rounded-md border border-white/10 bg-black/30 p-4 text-sm">
              {content}
            </pre>
          ) : null}
        </div>
      </Dialog>
    </>
  )
}


