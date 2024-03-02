import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { HelpCircle } from "lucide-react";

import HoverInformation from "../HoverInformation";
import PacerColour from "./PacerColour";
import WordChunkingTechnique from "./WordChunkingTechnique";
import StopRegressionTechnique from "./StopRegressionTechnique";

interface PacingTechniqueProps {
  pacingTechnique: boolean;
  setPacingTechnique: (pacingTechnique: boolean) => void;
  pacerColour: string;
  setPacerColour: (pacerColour: string) => void;
  wordChunking: number;
  setWordChunking: (wordChunking: number) => void;
  stopRegression: boolean;
  setStopRegression: (stopRegression: boolean) => void;
  regressionOpacity: number;
  setRegressionOpacity: (regressionOpacity: number) => void;
}

function PacingTechnique({
  pacingTechnique,
  setPacingTechnique,
  pacerColour,
  setPacerColour,
  wordChunking,
  setWordChunking,
  stopRegression,
  setStopRegression,
  regressionOpacity,
  setRegressionOpacity,
}: PacingTechniqueProps) {
  
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
              aria-label={"colour" + pacerColour + "selected"}
              pacerColour={pacerColour}
              setPacerColour={setPacerColour}
            />
          </div>
          <WordChunkingTechnique
            wordChunking={wordChunking}
            setWordChunking={setWordChunking}
          />
          <StopRegressionTechnique
            stopRegression={stopRegression}
            setStopRegression={setStopRegression}
            regressionOpacity={regressionOpacity}
            setRegressionOpacity={setRegressionOpacity}
          />
        </>
      )}
    </div>
  );
}

export default PacingTechnique;
