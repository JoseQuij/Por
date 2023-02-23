"use client"
import NavBar from "../components/NavBar"
import { ThemeProvider } from "next-themes"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="flex">
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar/>
          
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
