import './globals.css';
import '@fontsource/lexend/latin.css';
import type { Metadata } from 'next';

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
      <body className="font-lexend">{children}</body>
    </html>
  );
}