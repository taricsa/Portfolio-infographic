import { readFile } from 'node:fs/promises'
import path from 'node:path'
import type {
  SiteData,
  ResumeContext,
  Strength,
  Metric,
  Industry,
  ValuesData,
} from './types'

const root = process.cwd()

async function readJsonFile<T>(relativePath: string): Promise<T> {
  const filePath = path.join(root, relativePath)
  const json = await readFile(filePath, 'utf8')
  return JSON.parse(json) as T
}

export async function getSiteData(): Promise<SiteData> {
  return readJsonFile<SiteData>('data/site.json')
}

export async function getResumeContext(): Promise<ResumeContext> {
  return readJsonFile<ResumeContext>('data/resume-context.json')
}

export async function getStrengths(): Promise<Strength[]> {
  return readJsonFile<Strength[]>('data/strengths.json')
}

export async function getMetrics(): Promise<Metric[]> {
  return readJsonFile<Metric[]>('data/metrics.json')
}

export async function getIndustries(): Promise<Industry[]> {
  return readJsonFile<Industry[]>('data/industries.json')
}

export async function getValues(): Promise<ValuesData> {
  return readJsonFile<ValuesData>('data/values.json')
}

export function aiFeaturesEnabled(site: SiteData): boolean {
  const toggledOn = site.ai.enableAma || site.ai.enableIntroEmail
  const hasKey = Boolean(process.env['NEXT_PUBLIC_GEMINI_API_KEY'])
  return toggledOn && hasKey
}


