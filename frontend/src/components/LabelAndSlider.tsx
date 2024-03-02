import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";

interface LabelAndSliderProps {
  ariaLabelText: string;
  ariaLabelSpan: string;
  defaultValue: number;
  onValueChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  id: string;
  labelText: string;
  spanLabel: string;
}

function LabelAndSlider({
  ariaLabelText,
  ariaLabelSpan,
  defaultValue,
  onValueChange,
  min,
  max,
  step,
  id,
  labelText,
  spanLabel,
}: LabelAndSliderProps) {
  return (
    <div
      role="presentation"
      className="relative flex flex-col items-start mt-4 "
    >
      <Label htmlFor={id} className="mb-4 text-sm text-muted-foreground">
        {labelText}
      </Label>
      <Slider
        aria-label={ariaLabelText}
        defaultValue={[defaultValue]}
        onValueChange={(value) => onValueChange(value[0])}
        min={min}
        max={max}
        step={step}
        id={id}
      />
      <span
        aria-label={ariaLabelSpan}
        className="absolute top-0 right-0 mt-1 mr-2 text-sm text-muted-foreground"
      >
        {defaultValue} {spanLabel}
      </span>
    </div>
  );
}

export default LabelAndSlider;
