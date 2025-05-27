import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"

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
      </body>
    </html>
  )
}
