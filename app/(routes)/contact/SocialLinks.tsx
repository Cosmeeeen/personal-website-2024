import * as React from 'react';

import { socialLinks } from '@/app/constants/socialLinks';
import type { TSocialLink } from '@/app/constants/socialLinks';
import { Link } from 'react-feather';

const SocialLinkCard = ({ link }: { link: TSocialLink }) => {
  return (
    <div className='flex w-full flex-wrap items-center space-x-4 rounded-md border p-4 2xl:w-[calc(50%-0.5rem)]'>
      {link.icon}
      <div className='flex-1 space-y-1'>
        <p className='text-sm font-medium leading-none'>{link.title}</p>
        {link.description && (
          <p className='text-sm text-muted-foreground'>{link.description}</p>
        )}
      </div>
      <a
        href={link.href}
        target='_blank'
        className='transition-color hover:text-muted-foreground'
      >
        <Link />
      </a>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className='my-4 flex flex-col flex-wrap gap-2 2xl:flex-row'>
      {socialLinks.map((link, index) => (
        <SocialLinkCard key={index} link={link} />
      ))}
    </div>
  );
};

export default SocialLinks;
