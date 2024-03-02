"use client";

import { Settings } from "react-feather";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type SettingsButtonProps = {
  onResetScores: () => void;
};

const SettingsButton = (props: SettingsButtonProps) => {
  const { onResetScores } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Settings className="hover:text-muted-foreground cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onResetScores}>
          Reset Scores
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsButton;
