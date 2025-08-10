import { NextResponse } from 'next/server'
import { getResumeContext, getSiteData } from '../../../lib/data'

export async function POST() {
  const site = await getSiteData()
  if (!site.ai.enableIntroEmail) {
    return NextResponse.json({ error: 'Intro Email disabled' }, { status: 400 })
  }
  const apiKey = process.env['NEXT_PUBLIC_GEMINI_API_KEY']
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not set' }, { status: 400 })
  }

  const resume = await getResumeContext()
  const prompt = `Draft a friendly, 120-180 word email introducing ${site.name} (${site.title}). Summary: ${resume.summary}. Strengths: ${resume.skills.productLeadership.join(', ')}, ${resume.skills.technicalAcumen.join(', ')}, ${resume.skills.executiveLeadership.join(', ')}. Tone: warm, clear, professional. Avoid exaggeration.`

  try {
    const res = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' + apiKey,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      },
    )

    if (!res.ok) {
      const err = await res.text()
      return NextResponse.json({ error: err || 'Generation failed' }, { status: 500 })
    }
    const data = (await res.json()) as any
    const text: string | undefined = data?.candidates?.[0]?.content?.parts?.[0]?.text
    return NextResponse.json({ text: text ?? 'No content' })
  } catch (e: unknown) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 })
  }
}


