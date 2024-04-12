import { SocialIcon } from '@/components/SocialIcon';
import { Separator } from '@/components/ui/separator';
import { socialLinks } from '@/app/constants/socialLinks';
import Navigation from './Navigation';

export default function Header() {
  return (
    <div className='my-5'>
      <div className='flex grow items-center justify-between'>
        <div className='my-5'>
          <h1 className='text-4xl font-bold lg:text-5xl'>Cosmin Ilie</h1>
          <h2 className='text-xl font-thin lg:text-2xl'>Frontend Engineer</h2>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-4 md:grid-rows-1'>
          {socialLinks
            .filter((link) => link?.showInHeader)
            .map((link, index) => (
              <SocialIcon
                key={index}
                icon={link.icon}
                href={link.href}
                label={link.title}
              />
            ))}
        </div>
      </div>
      <Separator />
      <Navigation />
      <Separator />
    </div>
  );
}
