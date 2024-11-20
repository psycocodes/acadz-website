import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomBackground from "@/components/ui/background";
import NavBar from "@/components/ui/navbar";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const interAlt = Inter({ subsets: ['latin'] });

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
});

const centauriDefault = localFont({
  src: "./fonts/Centauri.ttf",
  variable: "--font-centauri",
  weight: "100 900",
});

const interItalic = localFont({
  src: "./fonts/Inter-Italic-VariableFont.ttf",
  variable: "--font-inter-italic",
});

const inter = localFont({
  src: "./fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
});
const guisol = localFont({
  src: "./fonts/Guisol.ttf",
  variable: "--font-guisol",
});
const migra = localFont({
  src: "./fonts/Migra-Extrabold.ttf",
  variable: "--font-migra",
});

export const metadata: Metadata = {
  title: "AcadZ",
  description: "Learning App by Whitespace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={` ${interAlt.className} ${guisol.variable} ${migra.variable} ${centauriDefault.variable} ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${interItalic.variable} antialiased dark`}
      >
        <NavBar/>
        <div className="absolute inset-0 top-[3rem]">{children}</div>

      </body>
    </html>
  );
}
