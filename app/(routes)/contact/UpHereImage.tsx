'use client';

import { useTheme } from "next-themes";
import Image from "next/image";
import contactUpHereImage from '@/app/_assets/images/contact-up-here.webp';

const UpHereImage = () => {
  const { theme } = useTheme();
  return (
    <div className='flex w-full justify-end'>
      <Image src={contactUpHereImage} alt="Contact at top right of page" className={theme === 'light' ? 'invert' : 'invert-0'} />
    </div>
  );
};

export default UpHereImage;