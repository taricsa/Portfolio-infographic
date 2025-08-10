import type { Metadata } from 'next'
import './globals.css'
import { getSiteData } from '../lib/data'

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteData()
  return {
    title: `${site.name} — ${site.title}`,
    description: site.description,
    manifest: '/manifest.webmanifest',
    openGraph: {
      title: `${site.name} — ${site.title}`,
      description: site.description,
      images: ['/og-image.png'],
      type: 'website',
    },
    themeColor: '#0B0F19',
  }
}

export const viewport = {
  themeColor: '#0B0F19',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const site = await getSiteData()
  return (
    <html lang="en">
      <body style={{
        // Expose CSS variables for gradient accent
        ['--accent-from' as any]: site.accent.gradientFrom,
        ['--accent-to' as any]: site.accent.gradientTo,
      }}>
        {children}
      </body>
    </html>
  )
}


