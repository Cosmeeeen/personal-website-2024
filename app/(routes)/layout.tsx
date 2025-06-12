import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { ModeToggle } from '@/components/ModeToggle';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cosmin Ilie',
  description: "Cosmin Ilie's personal website",
  other: {
    "google-adsense-account": "ca-pub-8594891858511370",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <TooltipProvider>
            {children}
            <ModeToggle />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
