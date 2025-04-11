import './globals.css'

export const metadata = {
  title: 'Eduardo Hung | Product Manager',
  description: 'Personal portfolio of John Doe, an experienced Product Manager and UX Strategist',
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
