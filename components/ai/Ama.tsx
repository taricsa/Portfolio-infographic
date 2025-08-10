"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'

type Props = { enabled: boolean }

export function Ama({ enabled }: Props) {
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('What are your core strengths?')
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState<string | null>(null)

  async function ask() {
    setLoading(true)
    setAnswer(null)
    try {
      const response = await fetch('/api/ama', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to generate')
      setAnswer(data.text as string)
    } catch (e: unknown) {
      setAnswer((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  // Show button even when disabled to surface messaging inside the dialog
  // If disabled, we short-circuit the network call and show guidance

  return (
    <>
      <Button onClick={() => setOpen(true)}>{enabled ? 'Ask me anything' : 'Ask me anything'}</Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="AMA">
        <div className="space-y-3">
          <label className="block text-sm text-white/80">
            Your question
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Type your question"
            />
          </label>
          <div className="flex gap-2">
            <Button onClick={ask} disabled={loading || !enabled}>
              {enabled ? (loading ? 'Thinking…' : 'Ask') : 'Enable AI first'}
            </Button>
            <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          </div>
          {!enabled ? (
            <p className="text-sm text-white/70">
              To enable: set `NEXT_PUBLIC_GEMINI_API_KEY` and `ai.enableAma=true` in `data/site.json`.
            </p>
          ) : null}
          {answer ? (
            <pre className="whitespace-pre-wrap rounded-md border border-white/10 bg-black/30 p-4 text-sm">
              {answer}
            </pre>
          ) : null}
        </div>
      </Dialog>
    </>
  )
}


