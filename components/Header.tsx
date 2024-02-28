import { SocialIcon } from "@/components/SocialIcon";
import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/app/constants/socialLinks";
import Navigation from './Navigation';

export default function Header() {
  return (
    <div className='my-5'>
      <div className="flex justify-between items-center grow">
        <div className="my-5">
          <h1 className="lg:text-5xl text-4xl font-bold">Cosmin Ilie</h1>
          <h2 className="lg:text-2xl text-xl font-thin">Frontend Engineer</h2>
        </div>
        <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-2">
          {
            socialLinks.filter(link => link?.showInHeader).map((link, index) => (
              <SocialIcon key={index} icon={link.icon} href={link.href} label={link.title} />
            ))
          }
        </div>
      </div>
      <Separator />
      <Navigation />
      <Separator />
    </div>
  );
}
