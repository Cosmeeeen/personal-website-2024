'use client'

import * as React from "react";
import { Download, Smile } from "react-feather";
import { Button } from "./ui/button";

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

  if (isDownloading) return (
    <Button variant="outline" className='flex gap-5 align-center' disabled>
      Loading...
      <Smile className='w-5 h-5' />
    </Button>
  );

  return (
    <Button variant="outline" className='flex gap-5 align-center' onClick={handleClick}>
      Download my CV
      <Download className='w-5 h-5' />
    </Button>
  );
};

export default DownloadCvButton;