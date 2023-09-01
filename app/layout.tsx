import { Nunito } from 'next/font/google'
import './globals.css'
import Modal from './components/modals/Modal'
import Navbar from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel="Submit" title='Hello World' isOpen />
          <Navbar />
        </ClientOnly>
        {children}</body>
    </html>
  )
}
