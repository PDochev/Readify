import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { HelpCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import HoverInformation from "../HoverInformation";
import PacerColour from "./PacerColour";

interface PacingTechniqueProps {
  pacingTechnique: boolean;
  setPacingTechnique: (pacingTechnique: boolean) => void;
  pacerColour: string;
  setPacerColour: (pacerColour: string) => void;
  wordChunking: number;
  setWordChunking: (wordChunking: number) => void;
}

function PacingTechnique({
  pacingTechnique,
  setPacingTechnique,
  pacerColour,
  setPacerColour,
  wordChunking,
  setWordChunking,
}: PacingTechniqueProps) {
  // function handlePacingTechnique() {
  //   setPacingTechnique(!pacingTechnique);
  //   setHighlightIndex(0);
  // }
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
          <h2>Pacing Technique</h2>
          <HoverInformation
            icon={<HelpCircle className="w-4 h-4 ml-2 cursor-help" />}
            title="Pacing Technique"
            description="Pacing technique is a method of speed reading that uses a visual aid to pace the reader. This can be a pen, finger, or a pointer. The reader follows the visual aid across the page, which helps to reduce subvocalization and increase reading speed."
          />
        </div>
        <Switch
          onCheckedChange={setPacingTechnique}
          checked={pacingTechnique}
        />
      </div>
      {pacingTechnique && (
        <>
          <div
            role="presentation"
            className="relative flex justify-between mt-4"
          >
            <Label
              htmlFor="pacerColour"
              className="flex text-sm text-muted-foreground"
            >
              Pacer Colour
            </Label>
            <PacerColour
              pacerColour={pacerColour}
              setPacerColour={setPacerColour}
            />
          </div>
          <div
            role="presentation"
            className="relative flex flex-col items-start mt-4"
          >
            <Label
              htmlFor="wordChunking"
              className="mb-4 text-sm text-muted-foreground"
            >
              Word Chunking
            </Label>
            <Slider
              aria-label={wordChunking + "words"}
              defaultValue={[wordChunking]}
              onValueChange={(value) => setWordChunking(value[0])}
              min={1}
              max={10}
              step={1}
              id="wordChunking"
            />
            <span
              aria-label="Current number of words chunking"
              className="absolute top-0 right-0 mt-1 mr-2 text-sm text-muted-foreground"
            >
              {wordChunking} words
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default PacingTechnique;
