import Image from 'next/image';

import Header from '@/components/Header';
import profileImage from '@/app/_assets/profilePicture.webp';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="lg:w-1/2 lg:mx-0 w-full mx-5">
        <Header />
        <div className="flex gap-5 items-center lg:flex-row flex-col">
          <Image
            src={profileImage}
            alt="A photo of me"
            width={256}
            height={256}
            className="rounded-full h-fit w-fit"
          />
          <div>
            <h1 className="lg:text-4xl text-3xl font-semibold mb-3">Quick Introduction</h1>
            <Separator />
            <p className="lg:text-lg text-base mt-6">
              I&apos;m a frontend engineer with a passion for web development. I love to
              create beautiful and user-friendly interfaces. I&apos;m always eager to
              learn new technologies and improve my skills, staying up to
              date with the latest trends in the industry, while also deepening my
              knowledge in industry standards and best practices.
            </p>
            <p className="lg:text-lg text-base italic font-thin mt-3">
              I don&apos;t really have any good pictures of myself, but I&apos;m working on it.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
