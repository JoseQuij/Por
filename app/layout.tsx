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
      <body className="bg-fill justify-center bg-[url('/bg-wallpaper-comp.jpg')] bg-fixed bg-no-repeat">
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar  />
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
