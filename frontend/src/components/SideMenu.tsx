import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MoreVertical } from "lucide-react";
import Stats from "./Stats";
import FontSize from "./FontSize";
import LineSpacing from "./LineSpacing";
import FontFamily from "./FontFamily";
import LetterSpacing from "./LetterSpacing";
import { useResizeScreen } from "@/customHooks/useResizeScreen";
import ThemeToggle from "./ThemeToggle";

import Stopwatch from "./Stopwatch";

interface SideMenuProps {
  wordsCount: number;
  charactersCount: number;
  textSize: number;
  setTextSize: (textSize: number) => void;
  fontFamily: string;
  setFontFamily: (fontFamily: string) => void;
  lineSpacing: number;
  setLineSpacing: (lineSpacing: number) => void;
  letterSpacing: number;
  setLetterSpacing: (letterSpacing: number) => void;
}

function SideMenu({
  wordsCount,
  charactersCount,
  textSize,
  setTextSize,
  fontFamily,
  setFontFamily,
  lineSpacing,
  setLineSpacing,
  letterSpacing,
  setLetterSpacing,
}: SideMenuProps) {
  const size = useResizeScreen();

  const sizeScreen = size[0] > 768 ? "right" : "bottom";

  return (
    <Sheet>
      <SheetTrigger>
        <MoreVertical />
      </SheetTrigger>
      <SheetContent side={sizeScreen}>
        <SheetHeader>
          <SheetTitle className="flex text-xl font-semibold tracking-tight border-b scroll-m-20">
            Stats
          </SheetTitle>
          <SheetDescription>
            <Stats wordsCount={wordsCount} charactersCount={charactersCount} />
          </SheetDescription>
        </SheetHeader>
        <SheetHeader>
          <SheetTitle className="flex text-xl font-semibold tracking-tight border-b scroll-m-20 mt-4">
            Theme
          </SheetTitle>
          <SheetDescription>
            <ThemeToggle />
          </SheetDescription>
        </SheetHeader>
        <SheetHeader>
          <SheetTitle className="flex mt-4 text-xl font-semibold tracking-tight border-b scroll-m-20">
            Typography
          </SheetTitle>
          <SheetDescription>
            <FontSize textSize={textSize} setTextSize={setTextSize} />
            <FontFamily fontFamily={fontFamily} setFontFamily={setFontFamily} />
            <LineSpacing
              lineSpacing={lineSpacing}
              setLineSpacing={setLineSpacing}
            />
            <LetterSpacing
              letterSpacing={letterSpacing}
              setLetterSpacing={setLetterSpacing}
            />
            <SheetTitle className="flex mt-4 text-xl font-semibold tracking-tight border-b scroll-m-20">
              Reading Speed
            </SheetTitle>
            <SheetDescription>
              <Stopwatch wordsCount={wordsCount} />
            </SheetDescription>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SideMenu;
