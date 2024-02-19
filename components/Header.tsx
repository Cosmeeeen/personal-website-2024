import { Mail, GitHub, Instagram, Linkedin } from 'react-feather';

import { SocialIcon } from "@/components/SocialIcon";
import { Separator } from "@/components/ui/separator";
import Navigation from './Navigation';

const socialIcons = [
  {
    icon: <GitHub />,
    href: 'https://github.com/Cosmeeeen/',
    label: 'GitHub',
  },
  {
    icon: <Instagram />,
    href: 'https://www.instagram.com/cosmin_ilie8',
    label: 'Instagram',
  },
  {
    icon: <Linkedin />,
    href: 'https://www.linkedin.com/in/cosmin8/',
    label: 'LinkedIn',
  },
  {
    icon: <Mail />,
    href: 'mailto:contact@cosmin.zip',
    label: 'Mail',
  }
];

export default function Header() {
  return (
    <div className='my-5'>
      <div className="flex justify-between items-center">
        <div className="my-5">
          <h1 className="lg:text-5xl text-4xl font-bold">Cosmin Ilie</h1>
          <h2 className="lg:text-2xl text-xl font-thin">Frontend Engineer</h2>
        </div>
        <div className="flex gap-1">
          {
            socialIcons.map((icon, index) => (
              <SocialIcon key={index} icon={icon.icon} href={icon.href} label={icon.label} />
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
