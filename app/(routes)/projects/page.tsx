import Header from '@/components/Header';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { PROJECTS } from './projects';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <main className='flex justify-center'>
      <div className='m-5 w-full lg:mx-0 lg:w-1/2'>
        <Header />
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <div className='flex w-full justify-between'>
              <h1 className='text-2xl font-semibold lg:text-3xl'>
                {project.title}
              </h1>
              <div className='flex gap-2 self-end p-1'>
                {project?.links?.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target='_blank'
                    className='group'
                  >
                    <link.icon
                      size={18}
                      className='group-hover:animate-bounce'
                    />
                  </a>
                ))}
              </div>
            </div>
            <Separator />
            <Carousel className='my-5' opts={{ loop: true }}>
              <CarouselPrevious />
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={image}
                      alt={project.title + ' image ' + index}
                      className='rounded-lg'
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
            </Carousel>
            {project?.inactive && (
              <>
                <p className='mt-3 italic text-red-600'>
                  {project?.inactiveMessage ||
                    'This project is currently inactive.'}
                </p>
              </>
            )}
            <p className='mt-3 text-base lg:text-lg'>{project.description}</p>
            <br />
            <p className='italic'>
              Used technologies: Next.js (pages router), tRPC, Prisma, Tailwind,
              NextAuth
            </p>
            <br />
            <p className='italic'>
              Project is deployed to Vercel, uses loglib for analytics,
              PlanetScale for the database, and (of course) gpt-3.5-turbo for
              prompt generation
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
