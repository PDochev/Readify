import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";

interface BionicReadingTechniqueProps {
  setBoldedWords: (boldedWords: boolean) => void;
  boldedWords: boolean;
  fixation: number;
  setFixation: (fixation: number) => void;
}

function BionicReadingTechnique({
  setBoldedWords,
  boldedWords,
  fixation,
  setFixation,
}: BionicReadingTechniqueProps) {
  return (
    <div
      role="presentation"
      className="flex flex-col p-3 mt-4 border rounded-lg shadow-sm "
    >
      <div className="flex flex-row items-center justify-between ">
        <h2>Bionic Reading</h2>
        <Switch onCheckedChange={setBoldedWords} checked={boldedWords} />
      </div>
      {boldedWords && (
        <>
          <div className="relative mt-4">
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

export default BionicReadingTechnique;
