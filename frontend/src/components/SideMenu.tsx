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
import HoverInformation from "./HoverInformation";
import { HelpCircle } from "lucide-react";

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
  timer: number;
  isRunning: boolean;
  handleStartTimer: () => void;
  handleStopTimer: () => void;
  handleResetTimer: () => void;
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
  timer,
  isRunning,
  handleStartTimer,
  handleStopTimer,
  handleResetTimer,
}: SideMenuProps) {
  const size = useResizeScreen();

  const sizeScreen = size[0] > 768 ? "right" : "bottom";

  return (
    <Sheet>
      <SheetTrigger>
        <MoreVertical aria-label="Open typography settings menu" />
      </SheetTrigger>
      <SheetContent className="max-h-full overflow-scroll" side={sizeScreen}>
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
            <SheetTitle className="flex items-center mt-4 lg:mt-6 md:mt-6 text-xl font-semibold tracking-tight border-b scroll-m-20">
              Reading Speed
              <HoverInformation
                icon={<HelpCircle className="w-4 h-4 ml-2 cursor-help" />}
                title="Reading speed (WPM)"
                description="Reading speed is the number of words you can read in a minute. It is calculated by dividing the number of words you read by the time it took you to read them. 
                Press Start to start the timer and Stop to stop it. You can reset the timer by pressing Reset. Your reading speed will be displayed when you stop the timer."
              />
            </SheetTitle>
            <SheetDescription>
              <Stopwatch
                wordsCount={wordsCount}
                timer={timer}
                isRunning={isRunning}
                handleStartTimer={handleStartTimer}
                handleStopTimer={handleStopTimer}
                handleResetTimer={handleResetTimer}
              />
            </SheetDescription>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SideMenu;
