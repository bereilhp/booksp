import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"
import { AxiomWebVitals } from 'next-axiom';
import "./global.css";

export const metadata = {
  title: "Booksp",
  description: "Book recomendations",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        {children}
        <Analytics />
        <AxiomWebVitals />
      </body>
    </html>
  )
}
