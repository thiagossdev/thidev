import { GistContent } from '@/components/GistContent';

export const metadata = {
  title: 'VSCode Settings',
};
const gistUrlSettings = process.env.GIST_URL_SETTINGS;

export default async function Settings() {
  /* @ts-expect-error Server Component */
  return <GistContent gistUrl={gistUrlSettings} />;
}
