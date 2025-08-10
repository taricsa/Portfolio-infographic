import type { ValuesData } from '../../lib/types'
import { Card } from '../ui/card'
import { CheckCircle2, XCircle } from 'lucide-react'

type Props = {
  values: ValuesData
}

export function Values({ values }: Props) {
  return (
    <section className="mt-12 grid gap-6 md:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-xl font-semibold">Must-Haves</h3>
        <ul className="mt-4 space-y-3 text-white/90">
          {values.mustHaves.map((item, idx) => (
            <li key={`${idx}-${item}`} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="p-6">
        <h3 className="text-xl font-semibold">Must-Nots</h3>
        <ul className="mt-4 space-y-3 text-white/90">
          {values.mustNots.map((item, idx) => (
            <li key={`${idx}-${item}`} className="flex items-start gap-3">
              <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-400" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}


