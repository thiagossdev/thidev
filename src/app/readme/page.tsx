import '@/styles/markdown.css';

import { getReadmeData } from '@/libs/readme';

export const revalidate = 1800; // revalidate every 30 minutes
export const metadata = {
  title: 'README.md',
};

export default async function Readme() {
  const data = await getReadmeData();

  return (
    <div className="w-full absolute inset-0 overflow-y-auto px-8 pt-4 pb-8 scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent">
      <div
        className="markdown min-w-[16rem]"
        dangerouslySetInnerHTML={{ __html: data.contentHtml }}
      />
    </div>
  );
}
