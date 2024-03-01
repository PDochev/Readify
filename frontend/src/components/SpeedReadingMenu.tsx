import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { BookOpenText } from "lucide-react";
import { useResizeScreen } from "@/customHooks/useResizeScreen";
import PeripheralVisionTechnique from "./SpeedReadingTechniques/PeripheralVsionTechnique";
import BionicReadingTechnique from "./SpeedReadingTechniques/BionicReadingTechnique";
import PacingTechnique from "./SpeedReadingTechniques/PacingTechnique";

interface SpeedReadingMenuProps {
  boldedWords: boolean;
  setBoldedWords: (boldedWords: boolean) => void;
  fixation: number;
  setFixation: (fixation: number) => void;
  peripheralVision: boolean;
  setPeripheralVision: (peripheralVision: boolean) => void;
  leftMargin: number;
  setLeftMargin: (leftMargin: number) => void;
  rightMargin: number;
  setRightMargin: (rightMargin: number) => void;
  peripheralOpacity: number;
  setPeripheralOpacity: (peripheralOpacity: number) => void;
  pacingTechnique: boolean;
  setPacingTechnique: (pacingTechnique: boolean) => void;
  pacerColour: string;
  setPacerColour: (pacerColour: string) => void;
  wordChunking: number;
  setWordChunking: (wordChunking: number) => void;
}

function SpeedReadingMenu({
  boldedWords,
  setBoldedWords,
  fixation,
  setFixation,
  peripheralVision,
  setPeripheralVision,
  leftMargin,
  setLeftMargin,
  rightMargin,
  setRightMargin,
  peripheralOpacity,
  setPeripheralOpacity,
  pacingTechnique,
  setPacingTechnique,
  pacerColour,
  setPacerColour,
  wordChunking,
  setWordChunking,
}: SpeedReadingMenuProps) {
  const size = useResizeScreen();

  const sizeScreen = size[0] > 768 ? "left" : "bottom";
  return (
    <Sheet>
      <SheetTrigger>
        <BookOpenText />
      </SheetTrigger>
      <SheetContent side={sizeScreen}>
        <SheetHeader>
          <SheetTitle className="flex mt-4 text-xl font-semibold tracking-tight border-b scroll-m-20">
            Speed Reading techniques
          </SheetTitle>
          <SheetDescription>
            <PacingTechnique
              pacingTechnique={pacingTechnique}
              setPacingTechnique={setPacingTechnique}
              pacerColour={pacerColour}
              setPacerColour={setPacerColour}
              wordChunking={wordChunking}
              setWordChunking={setWordChunking}
            />
          </SheetDescription>
          <SheetDescription>
            <BionicReadingTechnique
              setBoldedWords={setBoldedWords}
              boldedWords={boldedWords}
              fixation={fixation}
              setFixation={setFixation}
            />
          </SheetDescription>
          <SheetDescription>
            <PeripheralVisionTechnique
              peripheralVision={peripheralVision}
              setPeripheralVision={setPeripheralVision}
              leftMargin={leftMargin}
              setLeftMargin={setLeftMargin}
              rightMargin={rightMargin}
              setRightMargin={setRightMargin}
              peripheralOpacity={peripheralOpacity}
              setPeripheralOpacity={setPeripheralOpacity}
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SpeedReadingMenu;
