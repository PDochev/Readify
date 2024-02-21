import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { BookOpenText } from "lucide-react";
import { useState, useEffect } from "react";

import BionicReadingTechnique from "./BionicReadingTechnique";

interface SpeedReadingMenuProps {
  boldedWords: boolean;
  setBoldedWords: (boldedWords: boolean) => void;
  fixation: number;
  setFixation: (fixation: number) => void;
}

function SpeedReadingMenu({
  boldedWords,
  setBoldedWords,
  fixation,
  setFixation,
}: SpeedReadingMenuProps) {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
            <BionicReadingTechnique
              setBoldedWords={setBoldedWords}
              boldedWords={boldedWords}
              fixation={fixation}
              setFixation={setFixation}
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SpeedReadingMenu;
