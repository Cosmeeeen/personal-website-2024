"use client";

import * as React from "react";
import { Cpu, Divide, RefreshCw, Settings } from "react-feather";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Switch } from "../ui/switch";

type SettingsButtonProps = {
  onResetScores: () => void;
  isPlayingComputer: boolean;
  setIsPlayingComputer: (value: boolean) => void;
};

const SettingsButton = (props: SettingsButtonProps) => {
  const { onResetScores, isPlayingComputer, setIsPlayingComputer } = props;

  const switchIsPlayingComputer = React.useCallback(() => {
    onResetScores();
    setIsPlayingComputer(!isPlayingComputer);
  }, [onResetScores, isPlayingComputer, setIsPlayingComputer]);

  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          {isPlayingComputer ? (
            <Cpu className="hover:text-muted-foreground cursor-pointer" />
          ) : (
            <Settings className="hover:text-muted-foreground cursor-pointer" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem onClick={onResetScores}>
            <RefreshCw className="mr-2 h-4 w-4" />
            <span>Reset Scores</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={switchIsPlayingComputer}>
            <Cpu className="mr-2 h-4 w-4" />
            <span>VS AI Mode</span>
            <Switch
              checked={isPlayingComputer}
              onCheckedChange={switchIsPlayingComputer}
              className="ml-auto"
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SettingsButton;
