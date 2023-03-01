import Readme from './readme/page';

export default function Home() {
  /* @ts-expect-error Server Component */
  return <Readme />;
}
