import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: "Jordan Urbaez Portfolio",
  description: "Portfolio for Jordan Urbaez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
