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
    <div role="presentation" className="relative flex flex-col items-start ">
      <Label htmlFor="textSize" className="mb-4 text-sm text-muted-foreground">
        Font Size
      </Label>
      <Slider
        aria-label={`Font Size` + currentTextSize + `pixels`}
        defaultValue={[currentTextSize]}
        onValueChange={(value) => handleTextSizeChange(value[0])}
        min={10}
        max={30}
        step={1}
        id="textSize"
      />
      <span
        aria-label="Current Text Size"
        className="absolute top-0 right-0 mt-1 mr-2 text-sm text-muted-foreground"
      >
        {currentTextSize} px
      </span>
    </div>
  );
}

export default FontSize;
