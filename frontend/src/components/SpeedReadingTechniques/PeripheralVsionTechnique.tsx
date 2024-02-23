import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";
import { HelpCircle } from "lucide-react";
import HoverInformation from "../HoverInformation";

function PeripheralVisionTechnique() {
  return (
    <div
      role="presentation"
      className="flex flex-col p-3 mt-4 border rounded-lg shadow-sm "
    >
      <div
        role="presentation"
        className="flex flex-row items-center justify-between "
      >
        <div role="presentation" className="flex items-center">
          <h2>Bionic Reading</h2>
          <HoverInformation
            icon={<HelpCircle className="w-4 h-4 ml-2 cursor-help" />}
            title="Bionic Reading"
            description="Bionic Reading is a technique that allows you to read faster by bolding the first characters of a text."
          />
        </div>
        <Switch onCheckedChange={setBoldedWords} checked={boldedWords} />
      </div>
      {boldedWords && (
        <>
          <div role="presentation" className="relative mt-4">
            <Label
              htmlFor="fixation"
              className="flex mb-4 text-sm text-muted-foreground"
            >
              Fixation
            </Label>

            <Slider
              className="mt-4"
              aria-label={`Fixation` + fixation}
              defaultValue={[fixation]}
              onValueChange={(value) => setFixation(value[0])}
              min={3}
              max={11}
              step={1}
              id="fixation"
            />
            <span
              aria-label="Current Fixation"
              className="absolute top-0 right-0 mt-1 mr-2 text-sm text-muted-foreground"
            >
              {fixation}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default PeripheralVisionTechnique;
