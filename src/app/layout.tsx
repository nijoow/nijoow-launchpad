import type { Metadata } from 'next';
import { Jua } from 'next/font/google';
import './globals.css';

const jua = Jua({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nijoow LaunchPad',
  description: 'LaunchPad Piano and Drum',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${jua.className} flex h-full min-h-screen flex-col bg-zinc-700`}
      >
        {children}
      </body>
    </html>
  );
}
