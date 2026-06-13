import { Cormorant_Garamond, Epilogue } from "next/font/google";
import "@/styles/globals.css";


const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata = {
  title: "Solen — Emotional Environment",
  description:
    "A private atmospheric environment for arrival, settling, and quiet presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${epilogue.variable} h-full antialiased`}
    >
      <body className="h-screen overflow-hidden">

        {children}

      </body>
    </html>
  );
}
