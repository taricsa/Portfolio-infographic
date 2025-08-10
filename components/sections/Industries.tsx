import type { Industry } from '../../lib/types'
import { Card, CardDescription, CardTitle } from '../ui/card'

type Props = { industries: Industry[] }

export function Industries({ industries }: Props) {
  return (
    <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((i) => (
        <Card key={i.title}>
          <CardTitle>{i.title}</CardTitle>
          <CardDescription className="mt-2">{i.description}</CardDescription>
        </Card>
      ))}
    </section>
  )
}


