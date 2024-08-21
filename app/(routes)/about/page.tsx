import Header from '@/components/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import DownloadCvButton from '@/components/DownloadCvButton';
import { WORK_EXPERIENCE } from './workExperience';

export default function About() {
  return (
    <main className='flex justify-center'>
      <div className='m-5 w-full lg:mx-0 lg:w-1/2'>
        <Header />
        <h1 className='pb-2 text-3xl font-semibold lg:text-4xl'>
          General Presentation
        </h1>
        <Separator />
        <p className='my-3 text-base lg:text-lg'>
          Hello! My name is Cosmin-Mihai Ilie, and I am a frontend engineer from
          Romania. I have been working in web development using React
          professionally since 2021, but I have always been passionate about
          anything related to computer science, dabbling in various programming
          languages and technologies since I was 12 years old.
        </p>
        <h1 className='pb-2 pt-5 text-3xl font-semibold lg:text-4xl'>
          Work Experience
        </h1>
        <Separator />
        <Accordion type='single' collapsible>
          {WORK_EXPERIENCE.map((experience, index) => (
            <AccordionItem value={'item-' + index} key={index}>
              <AccordionTrigger>
                <div className='flex w-full items-center justify-between gap-3'>
                  <p className='text-left group-hover:underline'>
                    {experience.title}
                  </p>
                  <p className='h-fit w-fit shrink-0 text-right font-thin'>
                    {experience.date}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {experience.description}
                <br />
                <br />
                <i>Used technologies: {experience.technologies.join(', ')}</i>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className='align-center flex w-full justify-center py-10'>
          <DownloadCvButton />
        </div>
      </div>
    </main>
  );
}
