import '@/styles/global.css';

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { OpenFilesTabs } from '@/components/OpenFilesTabs';
import { Sidebar } from '@/components/Sidebar';
import { OpenFilesProvider } from '@/hooks/useOpenFiles';

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
  openGraph: {
    url: 'https://thi.dev.br',
    siteName: 'Thiago Sousa Santos',
    images: [
      {
        url: 'https://thi.dev.br/og.png',
        width: 1980,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <head />
      <body className="w-screen h-full bg-[#dd6da4] bg-app overflow-hidden">
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="h-full bg-purple-700 overflow-hidden border border-[#72707D] w-full max-w-[1480px] shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
            <OpenFilesProvider>
              <Header />

              <div className="flex items-start overflow-x-auto">
                <Sidebar />

                <div className="w-full h-full flex flex-col overflow-x-auto bg-purple-600">
                  <OpenFilesTabs />
                  <div className="h-full relative">{children}</div>
                </div>
              </div>
            </OpenFilesProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
