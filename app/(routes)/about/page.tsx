import Header from '@/components/Header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import DownloadCvButton from '@/components/DownloadCvButton';
import { WORK_EXPERIENCE } from './workExperience';

export default function About() {
  return (
    <main className="flex justify-center">
      <div className="lg:w-1/2 lg:mx-0 w-full m-5">
        <Header />
        <h1 className="lg:text-4xl text-3xl font-semibold pb-2">General Presentation</h1>
        <Separator />
        <p className="lg:text-lg text-base my-3">
          Hello! My name is Cosmin-Mihai Ilie, and I am a frontend engineer from Romania.
          I have been working in web development using React professionally since 2021,
          but I have always been passionate about anything related to computer science,
          dabbling in various programming languages and technologies since I was 12 years old.
        </p>
        <h1 className="lg:text-4xl text-3xl font-semibold pb-2 pt-5">Work Experience</h1>
        <Separator />
        <Accordion type="single" collapsible>
          {
            WORK_EXPERIENCE.map((experience, index) => (
              <AccordionItem value={'item-' + index} key={index}>
                <AccordionTrigger>
                  <div className='flex gap-3 items-center w-full justify-between'>
                    <p className='group-hover:underline text-left'>{experience.title}</p>
                    <p className='font-thin w-fit h-fit text-right shrink-0'>{experience.date}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {experience.description}
                  <br />
                  <br />
                  <i>Used technologies: {experience.technologies.join(', ')}</i>
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
        <div className='w-full flex justify-center align-center py-10'>
          <DownloadCvButton />
        </div>
      </div>
    </main>
  );
}
