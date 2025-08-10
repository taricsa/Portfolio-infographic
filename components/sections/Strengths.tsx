import type { Strength } from '../../lib/types'
import { Card, CardDescription, CardTitle } from '../ui/card'

type Props = { strengths: Strength[] }

export function Strengths({ strengths }: Props) {
  return (
    <section className="mt-12 grid gap-4 sm:grid-cols-2">
      {strengths.map((s) => (
        <Card key={s.title}>
          <CardTitle>{s.title}</CardTitle>
          <CardDescription className="mt-2">{s.description}</CardDescription>
        </Card>
      ))}
    </section>
  )
}


