import Header from '@/components/Header';
import UpHereImage from './UpHereImage';
import { Separator } from '@/components/ui/separator';
import ContactForm from './ContactForm';

export default function About() {
  return (
    <main className="flex justify-center">
      <div className="lg:w-1/2 lg:mx-0 w-full m-5">
        <Header />
        <UpHereImage />
        <h3 className="lg:text-xl text-l pb-2 pt-5">However, here are the extended links and a contact form in case you really don&apos;t like your mailing app.</h3>
        <ContactForm />
      </div>
    </main>
  );
}
