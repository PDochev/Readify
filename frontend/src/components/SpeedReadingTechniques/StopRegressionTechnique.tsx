import HoverInformation from "../HoverInformation";
import { HelpCircle, Blend } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";

interface StopRegressionTechniqueProps {
  stopRegression: boolean;
  setStopRegression: (stopRegression: boolean) => void;
  regressionOpacity: number;
  setRegressionOpacity: (regressionOpacity: number) => void;
}

function StopRegressionTechnique({
  stopRegression,
  setStopRegression,
  regressionOpacity,
  setRegressionOpacity,
}: StopRegressionTechniqueProps) {
  return (
    <>
      <div
        role="presentation"
        className="flex flex-row items-center justify-between mt-4"
      >
        <div role="presentation" className="flex items-center">
          <h2>Stop Regression</h2>
          <HoverInformation
            icon={<HelpCircle className="w-4 h-4 ml-2 cursor-help" />}
            title="Stopping Regression"
            description="Regression is the act of re-reading words or phrases. This can slow down reading speed. By enabling stop regression, the reader can focus on moving forward and avoid re-reading words. This can help to increase reading speed."
          />
        </div>
        <Switch onCheckedChange={setStopRegression} checked={stopRegression} />
      </div>
      {stopRegression && (
        <div
          role="presentation"
          className="relative flex flex-col items-start  mt-4"
        >
          <Label
            htmlFor="regressionOpacity"
            className=" flex mb-4 text-sm text-muted-foreground"
          >
            Opacity <Blend className="w-4 h-4 ml-2" />
          </Label>

          <Slider
            aria-label={`Regression Opacity` + regressionOpacity + "%"}
            defaultValue={[regressionOpacity]}
            onValueChange={(value) => setRegressionOpacity(value[0])}
            min={0}
            max={1}
            step={0.1}
            id="stopRegression"
          />
          <span
            aria-label="Current regression opacity"
            className="absolute top-0 right-0  mr-2  text-sm text-muted-foreground"
          >
            {regressionOpacity} %
          </span>
        </div>
      )}
    </>
  );
}

export default StopRegressionTechnique;
