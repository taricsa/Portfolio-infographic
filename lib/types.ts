export type SiteData = {
  name: string
  title: string
  description: string
  careerGoal?: string
  accent: {
    gradientFrom: string
    gradientTo: string
  }
  ai: {
    enableAma: boolean
    enableIntroEmail: boolean
  }
  cta: {
    enableIntroButton: boolean
    introButtonLabel: string
  }
}

export type ResumeContext = {
  summary: string
  skills: {
    productLeadership: string[]
    technicalAcumen: string[]
    executiveLeadership: string[]
  }
  experience: Array<{
    title: string
    company: string
    period: string
    description: string
  }>
  education: Array<{ degree: string; school: string; year: string }>
  certifications: string[]
  projects: Array<{ name: string; description: string }>
}

export type Strength = { title: string; description: string }
export type Metric = { value: string; label: string; note?: string }
export type Industry = { title: string; description: string }
export type ValuesData = { mustHaves: string[]; mustNots: string[] }


