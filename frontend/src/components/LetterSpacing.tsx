import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface LetterSpacingProps {
  letterSpacing: number;
  setLetterSpacing: (letterSpacing: number) => void;
}

function LetterSpacing({
  letterSpacing,
  setLetterSpacing,
}: LetterSpacingProps) {
  const [currentLetterSpacing, setCurrentLetterSpacing] =
    useState(letterSpacing);

  const handleLetterSpacingChange = (value: number) => {
    setCurrentLetterSpacing(value);
    setLetterSpacing(value);
  };

  return (
    <div
      role="presentation"
      className="flex flex-col items-start mt-4 relative"
    >
      <Label
        htmlFor="letterSpacing"
        className="text-sm text-muted-foreground mb-4"
      >
        Letter Spacing
      </Label>
      <Slider
        aria-label={`Letter Spacing` + currentLetterSpacing + `pixels`}
        defaultValue={[currentLetterSpacing]}
        onValueChange={(value) => handleLetterSpacingChange(value[0])}
        min={0}
        max={5}
        step={0.1}
        id="letterSpacing"
      />
      <span
        aria-label="Current Letter Spacing"
        className="absolute top-0 right-0 text-sm text-muted-foreground mr-2 mt-1"
      >
        {currentLetterSpacing} px
      </span>
    </div>
  );
}

export default LetterSpacing;
