'use client';

import * as React from 'react';
import { Download, Smile } from 'react-feather';
import { Button } from './ui/button';

const DownloadCvButton: React.FC = () => {
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleClick = async () => {
    setIsDownloading(true);
    const response = await fetch('/api/download-cv');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Cosmin_Ilie_CV.pdf';
    link.click();
    window.URL.revokeObjectURL(url);
    setIsDownloading(false);
  };

  if (isDownloading)
    return (
      <Button variant='outline' className='align-center flex gap-5' disabled>
        Loading...
        <Smile className='h-5 w-5' />
      </Button>
    );

  return (
    <Button
      variant='outline'
      className='align-center flex gap-5'
      onClick={handleClick}
    >
      Download my CV
      <Download className='h-5 w-5' />
    </Button>
  );
};

export default DownloadCvButton;
