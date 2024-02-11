import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { HiDotsVertical } from "react-icons/hi";
import { useState, useEffect } from "react";
import StatsComponent from "./StatsComponent";
import FontSize from "./FontSize";
import { Label } from "@radix-ui/react-label";

interface SideMenuProps {
  wordsCount: number;
  charactersCount: number;
  textSize: number;

  setTextSize: (textSize: number) => void;
}

function SideMenu({
  wordsCount,
  charactersCount,
  textSize,
  setTextSize,
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
            <StatsComponent
              wordsCount={wordsCount}
              charactersCount={charactersCount}
            />
          </SheetDescription>
        </SheetHeader>
        <SheetHeader>
          <SheetTitle className="mt-4 border-b flex scroll-m-20 text-xl font-semibold tracking-tight">
            Typography
          </SheetTitle>
          <SheetDescription>
            <FontSize textSize={textSize} setTextSize={setTextSize} />
            <div className="flex flex-col items-start mt-4 relative">
              <p className="text-sm text-muted-foreground mb-4">Font family</p>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SideMenu;
