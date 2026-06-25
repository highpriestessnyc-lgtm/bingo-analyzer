import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'BINGO LADDER Analyzer' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, padding: 0, background: '#0a0a0f', minHeight: '100vh', fontFamily: '-apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
