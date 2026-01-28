import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using standard Google Fonts if Geist is not desired, but user didn't specify. I'll stick to Geist for now or switch to Inter/Outfit as planned. I'll use Outfit for headings.
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Outfit is a great tech font
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: 'BICOL - Transformación Digital',
  description: 'Consultoría estratégica y soluciones tecnológicas para empresas modernas.',
}
  ;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${outfit.variable}`} style={{ fontFamily: 'var(--font-inter)' }}>
        <Navbar />
        <div style={{ paddingTop: 'var(--header-height)' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
