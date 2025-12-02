import type { Metadata } from 'next'
import '../tokens/tokens.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pendapat - Suarakan Pendapat Anda',
  description: 'Platform untuk menyuarakan pendapat dan menyertai kaji selidik tentang isu-isu semasa di Malaysia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


