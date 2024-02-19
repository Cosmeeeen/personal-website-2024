import Header from '@/components/Header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import DownloadCvButton from '@/components/DownloadCvButton';

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
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className='flex gap-3 items-center w-full justify-between'>
                <p className='group-hover:underline text-left'>Frontend Engineer - 8x8 inc.</p>
                <p className='font-thin w-fit h-fit text-right shrink-0'>2021 - present</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              I have been working at 8x8 inc. since 2021, where I started off as an intern and
              later got promoted to a full-time position. I have been working on the 8x8 Work Desktop
              and Web applications, where I have been responsible for implementing new features,
              fixing bugs, and improving the overall user experience, as part of a team of experienced engineers.
              <br />
              <br />
              <i>Used technologies: React, Redux, TypeScript, Jest, styled-components, and more</i>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className='flex gap-3 items-center w-full justify-between'>
                <p className='group-hover:underline text-left'>Volunteer Programming Teacher - Dalia&apos;s Book</p>
                <p className='font-thin w-fit h-fit text-right shrink-0'>2021</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              One of my goals in life is showing people the wonderful things you can achieve with programming.
              I was very excited to have the opportunity to teach programming to children remotely, in order to
              introduce them to the world of programming and technology. I have taught children aged 8-12 how to
              create their own games and animations using Scratch, while working with experienced teachers.
              <br />
              This project taught me a lot about patience, communication, and how to explain complex concepts
              in a simple and understandable way, as well as collaboration with other teachers.
              <br />
              <br />
              <i>Used technologies: Scratch, Google Suite (Meet, Docs, Sheets, etc...)</i>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className='flex gap-3 items-center w-full justify-between'>
                <p className='group-hover:underline text-left'>Design Team Volunteer - ExplorIT Bacău</p>
                <p className='font-thin w-fit h-fit text-right shrink-0'>2019</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              My first volunteering experience in the field of programming and technology was with ExplorIT, a
              programming contest organised in Bacău, Romania. I was part of the design team, where I was responsible
              for creating the visual identity of the contest, as well as the promotional materials, as well as
              creating the website.
              <br />
              <br />
              <i>Used technologies: Angular, Photoshop, Premiere Pro</i>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className='flex gap-3 items-center w-full justify-between'>
                <p className='group-hover:underline text-left'>(Erasmus+) Frontend Developer - DroidHouse</p>
                <p className='font-thin w-fit h-fit text-right shrink-0'>2018</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              While I was always passionate about programming, my first professional experience as well as
              my introduction to the world of web development was during an Erasmus+ project in Valencia, Spain,
              where I was responsible for creating a website for the project, as well as working on the existing
              website of the local business that was hosting us. This was a great experience, as I was able to
              receive feedback from professionals, as well as learn from them.
              <br />
              <br />
              <i>Used technologies: JavaScript, HTML, CSS, jQuery</i>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className='w-full flex justify-center align-center py-10'>
          <DownloadCvButton />
        </div>
      </div>
    </main>
  );
}
