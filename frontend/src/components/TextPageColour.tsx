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
          <Palette className="cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuLabel>Page Colour</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={textPageColour}
            onValueChange={setTextPageColour}
          >
            <DropdownMenuRadioItem value="pageColourDefault">
              <div className="w-6 h-6 rounded-full bg-textPageColours-pageColourDefault border border-blue-500 "></div>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pageColour1">
              <div className="w-6 h-6 rounded-full bg-textPageColours-pageColour1 border border-blue-500 "></div>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pageColour2">
              <div className="w-6 h-6 rounded-full bg-textPageColours-pageColour2 border border-blue-500 "></div>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pageColour3">
              <div className="w-6 h-6 rounded-full bg-textPageColours-pageColour3 border border-blue-500 "></div>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pageColour4">
              <div className="w-6 h-6 rounded-full bg-textPageColours-pageColour4 border border-blue-500 "></div>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TextPageColour;
