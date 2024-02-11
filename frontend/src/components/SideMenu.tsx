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

interface SideMenuProps {
  wordsCount: number;
  charactersCount: number;
}

function SideMenu({ wordsCount, charactersCount }: SideMenuProps) {
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
            <div className="flex flex-col items-start">
              <p className="text-sm text-muted-foreground">
                Words: <span className="">{wordsCount}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Characters: <span className="">{charactersCount}</span>
              </p>
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetHeader>
          <SheetTitle className="mt-4 border-b flex scroll-m-20 text-xl font-semibold tracking-tight">
            Typography
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-start">
              <p className="text-sm text-muted-foreground">Font size</p>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SideMenu;
