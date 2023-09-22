import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Martin Olivera',
  description: 'Martin Olivera portfolio. An enthusiastic Frontend React developer looking for a chance to get into this fantastic world of web developing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior:'smooth' }}>
      
      <body
        className={inter.className}>
          { children }
      </body>

    </html>
  )
}
