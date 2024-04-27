"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";

interface TextPageColourProps {
  textPageColour: string;
  setTextPageColour: (textPageColour: string) => void;
}

function TextPageColour({
  textPageColour,
  setTextPageColour,
}: TextPageColourProps) {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Palette
            className="cursor-pointer"
            aria-label="Open text page colour menu"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuLabel>Page Colour</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            className="flex flex-row items-center justify-between mr-4 md:flex-col md:items-start md:mr-0 lg:mr-0 lg:flex-col lg:items-start"
            value={textPageColour}
            onValueChange={setTextPageColour}
          >
            <DropdownMenuRadioItem value="pageColourDefault">
              <div className="w-5 h-5 border border-foreground rounded-full bg-textPageColours-pageColourDefault "></div>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pageColour1">
              <div className="w-5 h-5 border border-foreground rounded-full bg-textPageColours-pageColour1 "></div>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pageColour2">
              <div className="w-5 h-5 border border-foreground rounded-full bg-textPageColours-pageColour2 "></div>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pageColour3">
              <div className="w-5 h-5 border border-foreground rounded-full bg-textPageColours-pageColour3 "></div>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pageColour4">
              <div className="w-5 h-5 border border-foreground rounded-full bg-textPageColours-pageColour4 "></div>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TextPageColour;
