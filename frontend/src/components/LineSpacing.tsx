import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface LineSpacingProps {
  lineSpacing: number;
  setLineSpacing: (lineSpacing: number) => void;
}

function LineSpacing({ lineSpacing, setLineSpacing }: LineSpacingProps) {
  const [currentLineSpacing, setCurrentLineSpacing] = useState(lineSpacing);

  const handleLineSpacingChange = (value: number) => {
    setCurrentLineSpacing(value);
    setLineSpacing(value);
  };

  return (
    <div
      role="presentation"
      className="flex flex-col items-start mt-4 relative"
    >
      <Label
        htmlFor="lineSpacing"
        className="text-sm text-muted-foreground mb-4"
      >
        Line Spacing
      </Label>
      <Slider
        aria-label={`Line Spacing` + currentLineSpacing + `pixels`}
        defaultValue={[currentLineSpacing]}
        onValueChange={(value) => handleLineSpacingChange(value[0])}
        min={18}
        max={60}
        step={1}
        id="lineSpacing"
      />
      <span
        aria-label="Current Line Spacing"
        className="absolute top-0 right-0 text-sm text-muted-foreground mr-2 mt-1"
      >
        {currentLineSpacing} px
      </span>
    </div>
  );
}

export default LineSpacing;
