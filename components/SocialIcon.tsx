'use client'

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
};

const SocialIcon = ({ href, label, icon }: SocialIconProps) => {
  const handleLinkClick = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    window.open(href, '_blank');
  }, [href]);

  return (
    <div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={handleLinkClick}>
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </div>
  )
}

export { SocialIcon };
