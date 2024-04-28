import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local';

const roboto = Roboto({
  variable: '--roboto',
  weight: '300',
  subsets: ['latin'],
})

const arame = localFont({
  variable: '--arame',
  display: 'swap',
  src: [
    {
      path: './fonts/Arame/Arame-Thin.ttf',
      weight: '100',
      style: 'thin',
    },
    {
      path: './fonts/Arame/Arame.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});
export const metadata: Metadata = {
  title: "ZkNoid Quest",
  description: "Start your journey to the userfriendly ZK world",
  openGraph: {
    title: 'ZkNoid Quest',
    description:
      'Start your journey to the userfriendly ZK world',
    url: 'https://quest.zknoid.io/',
    images: '/meta-preview.png',
    siteName: 'ZkNoid Quest',
    type: 'website',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} ${arame.variable} overflow-x-hidden bg-dark`}>{children}</body>
    </html>
  );
}
