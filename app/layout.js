import './globals.css'
import { Rubik } from 'next/font/google'

//make site dynamic since it uses cookies and auth 
export const dynamic = 'force-dynamic'


const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'ColorFill',
  description: 'A mildly interesting graphing game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  )
}