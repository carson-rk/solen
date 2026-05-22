import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AlignWell — Mental Health Support for Students",
  description:
    "A private mental health support platform helping students navigate stress, overwhelm, and emotional weight with clarity and connection. Reflect privately, access relatable support, and get guided toward the right help.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}
