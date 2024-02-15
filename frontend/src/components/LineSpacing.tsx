import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";

interface LineSpacingProps {
  lineSpacing: number;
  setLineSpacing: (lineSpacing: number) => void;
}

function LineSpacing({ lineSpacing, setLineSpacing }: LineSpacingProps) {
  return (
    <div className="flex flex-col items-start mt-4 relative">
      <Label htmlFor="textSize" className="text-sm text-muted-foreground mb-4">
        Line Spacing
      </Label>
      <Slider
        defaultValue={[24]}
        onValueChange={(value) => setLineSpacing(value[0])}
        min={18}
        max={60}
        step={1}
        id="textSize"
      />
      <span className="absolute top-0 right-0 text-sm text-muted-foreground mr-2 mt-1">
        {lineSpacing} px
      </span>
    </div>
  );
}

export default LineSpacing;
