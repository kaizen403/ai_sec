import './globals.css';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'AI Secretary - The AI That Makes You Fire Your Secretary',
  description: 'Forge genuine connections—calls, texts, reminders, and answers that feel human.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${lexend.variable} font-lexend`}>{children}</body>
    </html>
  );
}