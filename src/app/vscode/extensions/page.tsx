import { GistContent } from '@/components/GistContent';

export const metadata = {
  title: 'VSCode Extensions',
};
const gistUrlExtensions = process.env.GIST_URL_EXTENSIONS;

export default async function Extensions() {
  /* @ts-expect-error Server Component */
  return <GistContent gistUrl={gistUrlExtensions} />;
}
