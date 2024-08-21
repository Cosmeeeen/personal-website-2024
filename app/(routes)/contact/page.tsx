import Header from '@/components/Header';
import UpHereImage from './UpHereImage';
import { Separator } from '@/components/ui/separator';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

export default function About() {
  return (
    <main className='flex justify-center'>
      <div className='m-5 w-full lg:mx-0 lg:w-1/2'>
        <Header />
        <UpHereImage />
        <h3 className='text-l pb-2 pt-5 lg:text-xl'>
          However, here are the extended links and a contact form in case you
          really don&apos;t like your mailing app.
        </h3>
        <SocialLinks />
        <ContactForm />
      </div>
    </main>
  );
}
