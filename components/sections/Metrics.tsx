import type { Metric } from '../../lib/types'
import { Card, CardDescription, CardTitle } from '../ui/card'

type Props = { metrics: Metric[] }

export function Metrics({ metrics }: Props) {
  return (
    <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((m) => (
        <Card key={m.label}>
          <CardTitle className="text-2xl">{m.value}</CardTitle>
          <CardDescription className="mt-2">{m.label}</CardDescription>
          {m.note ? <p className="mt-3 text-xs text-white/60">{m.note}</p> : null}
        </Card>
      ))}
    </section>
  )
}


