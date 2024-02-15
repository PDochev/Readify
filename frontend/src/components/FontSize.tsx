import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface FontSizeProps {
  textSize: number;
  setTextSize: (textSize: number) => void;
}

function FontSize({ textSize, setTextSize }: FontSizeProps) {
  const [currentTextSize, setCurrentTextSize] = useState(textSize);

  const handleTextSizeChange = (value: number) => {
    setCurrentTextSize(value);
    setTextSize(value);
  };

  return (
    <div className="flex flex-col items-start relative  ">
      <Label htmlFor="textSize" className="text-sm text-muted-foreground mb-4">
        Font Size
      </Label>
      <Slider
        className=""
        defaultValue={[currentTextSize]}
        onValueChange={(value) => handleTextSizeChange(value[0])}
        min={10}
        max={30}
        step={1}
        id="textSize"
      />
      <span className="absolute top-0 right-0 text-sm text-muted-foreground mr-2 mt-1">
        {currentTextSize} px
      </span>
    </div>
  );
}

export default FontSize;
