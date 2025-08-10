import { getIndustries, getMetrics, getResumeContext, getSiteData, getStrengths, getValues, aiFeaturesEnabled } from '../lib/data'
import { Strengths } from '../components/sections/Strengths'
import { Metrics } from '../components/sections/Metrics'
import { Industries } from '../components/sections/Industries'
import { Values } from '../components/sections/Values'
import { IntroEmail } from '../components/ai/IntroEmail'
import { Ama } from '../components/ai/Ama'
import { Card } from '../components/ui/card'

export default async function Page() {
  const [site, resume, strengths, metrics, industries, values] = await Promise.all([
    getSiteData(),
    getResumeContext(),
    getStrengths(),
    getMetrics(),
    getIndustries(),
    getValues(),
  ])

  const showAi = aiFeaturesEnabled(site)

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="text-center">
        <a href="/instructions" className="inline-block rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] p-[1px]">
          <span className="rounded-full bg-[#0B0F19] px-4 py-1 text-xs text-white/80">Instructions</span>
        </a>
        <h1 className="mt-6 bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-2 text-lg text-white/80">{site.title}</p>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">{site.description}</p>
        {site.cta.enableIntroButton && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <IntroEmail
              enabled={showAi && site.ai.enableIntroEmail && site.cta.enableIntroButton}
              label={site.cta.introButtonLabel}
            />
          </div>
        )}
      </header>

      <section className="mt-12 grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold">Career Goal</h2>
          <p className="mt-3 text-white/80">
            {site.careerGoal ?? 'Add your career goal to data/site.json under careerGoal.'}
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold">Who I Am</h2>
          <p className="mt-3 text-white/80">{resume.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {/* Show AMA button even if no key; it opens and message explains */}
            <Ama enabled={true} />
            <IntroEmail
              enabled={showAi && site.ai.enableIntroEmail && site.cta.enableIntroButton}
              label={site.cta.introButtonLabel}
            />
          </div>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Core Strengths</h2>
        <Strengths strengths={strengths} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Proven Impact</h2>
        <Metrics metrics={metrics} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Ideal Industry Focus</h2>
        <Industries industries={industries} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">The Culture I Want to Build</h2>
        <Values values={values} />
      </section>

      <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </main>
  )
}


