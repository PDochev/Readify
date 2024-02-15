import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { HiDotsVertical } from "react-icons/hi";
import { useState, useEffect } from "react";
import Stats from "./Stats";
import FontSize from "./FontSize";
import LineSpacing from "./LineSpacing";
import FontFamily from "./FontFamily";
import LetterSpacing from "./LetterSpacing";
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
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const sizeScreen = size[0] > 768 ? "right" : "bottom";

  return (
    <Sheet>
      <SheetTrigger>
        <HiDotsVertical />
      </SheetTrigger>
      <SheetContent side={sizeScreen}>
        <SheetHeader>
          <SheetTitle className="border-b flex scroll-m-20 text-xl font-semibold tracking-tight">
            Stats
          </SheetTitle>
          <SheetDescription>
            <Stats wordsCount={wordsCount} charactersCount={charactersCount} />
          </SheetDescription>
        </SheetHeader>
        <SheetHeader>
          <SheetTitle className="mt-4 border-b flex scroll-m-20 text-xl font-semibold tracking-tight">
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
            <SheetTitle className="mt-4 border-b flex scroll-m-20 text-xl font-semibold tracking-tight">
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
