import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ai Newsletter Generator',
  description: 'Writing better ads then your entire marketing team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen w-full flex-col items-center text-left py-8">
        <h1 className="mt-4 mb-0 text-4xl font-bold">Ai Newsletter Generator</h1>
        <h4 className="font-bold text-lg">Writing better ads then your entire marketing team</h4>
            {children}
          </main>
      </body>
    </html>
  )
}
