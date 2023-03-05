import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-full flex-col gap-6 justify-center items-center min-w-[16rem]">
      <Image
        src="code-coffee.svg"
        alt="code and coffee"
        className="w-full max-w-[12rem]"
        width={64}
        height={64}
      />
      <span className="text-sm text-[#8F8CA8]">Thiago Sousa Santos</span>
    </div>
  );
}
