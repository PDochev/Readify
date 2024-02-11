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

function SideMenu() {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const largeScreen = size[0] > 768 ? "right" : "bottom";

  return (
    <Sheet>
      <SheetTrigger>
        <HiDotsVertical />
      </SheetTrigger>
      <SheetContent side={largeScreen}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SideMenu;
