import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";

function FontSize({ textSize, setTextSize }) {
  return (
    <div className="flex flex-col items-start relative">
      <Label htmlFor="textSize" className="text-sm text-muted-foreground mb-4">
        Font Size
      </Label>
      <Slider
        defaultValue={[16]}
        onValueChange={(value) => setTextSize(value[0])}
        min={10}
        max={30}
        step={1}
        id="textSize"
      />
      <span className="absolute top-0 right-0 text-sm text-muted-foreground mr-2 mt-1">
        {textSize} px
      </span>
    </div>
  );
}

export default FontSize;
