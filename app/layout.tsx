import Footer from '@/components/Footer'
import './globals.css'
import { Urbanist } from 'next/font/google'
import NavBar from '@/components/NavBar'
import ModalProvider from '@/providers/ModalProvider'
import ToastProvider from '@/providers/ToastProvider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider/>
        <ToastProvider/>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
