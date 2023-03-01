import '../styles/global.css';

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Menu } from '@/components/Menu';
import { Header } from '@/components/Header';
import { Explorer } from '@/components/Explorer';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Thiago Sousa Santos',
    template: '%s | Thiago S. Santos',
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    "Developer at @RevGás. I'm a Developer! And for me, things are always evolving and this evolution is necessary.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-[#7F7FD5] bg-app">
        <div className="z-10 relative h-screen p-20 flex items-center justify-center">
          <div className="bg-purple-700 overflow-hidden border border-[#72707D] w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
            <Header />

            <div className="grid grid-cols-editor max-h-full">
              <Menu />
              <Explorer />

              <div className="h-full relative bg-purple-600">{children}</div>
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
