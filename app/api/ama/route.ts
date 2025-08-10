import { NextRequest, NextResponse } from 'next/server'
import { getResumeContext, getSiteData } from '../../../lib/data'

export async function POST(req: NextRequest) {
  const site = await getSiteData()
  if (!site.ai.enableAma) {
    return NextResponse.json({ error: 'AMA disabled' }, { status: 400 })
  }

  const apiKey = process.env['NEXT_PUBLIC_GEMINI_API_KEY']
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not set' }, { status: 400 })
  }

  const body = (await req.json().catch(() => ({}))) as { question?: string }
  const question = body.question?.trim() || 'What are your strengths?'
  const resume = await getResumeContext()

  const system = `You are a concise assistant for a professional portfolio. Use the resume context to answer.
Summary: ${resume.summary}
Skills: product leadership(${resume.skills.productLeadership.join(', ')}), technical(${resume.skills.technicalAcumen.join(', ')}), executive(${resume.skills.executiveLeadership.join(', ')})
Experience: ${resume.experience.map((e) => `${e.title} @ ${e.company} (${e.period})`).join('; ')}`

  try {
    const res = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' + apiKey,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: system + '\n\nQ: ' + question + '\nA:' }] }] }),
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


