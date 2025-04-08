import type { Metadata } from "next";

import "./globals.css";

import localFont from "next/font/local";

const apercu = localFont({
  src: "./fonts/ApercuPro-Regular.woff",
  variable: "--font-apercu-sans",
  weight: "100 900",
});
const apercubold = localFont({
  src: "./fonts/ApercuPro-Bold.woff",
  variable: "--font-apercu-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Harbour.Space",
  description: "Harbour.Space is a university for technology and design.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${apercu.className}${apercubold.className}`}>
    {children}
    </body>
    </html>
  );
}