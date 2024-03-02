import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";
import { HelpCircle } from "lucide-react";
import HoverInformation from "../HoverInformation";
import { Blend } from "lucide-react";
import { useResizeScreen } from "@/customHooks/useResizeScreen";

interface PeripheralVisionTechniqueProps {
  setPeripheralVision: (peripheralVision: boolean) => void;
  peripheralVision: boolean;
  leftMargin: number;
  setLeftMargin: (leftMargin: number) => void;
  rightMargin: number;
  setRightMargin: (rightMargin: number) => void;
  peripheralOpacity: number;
  setPeripheralOpacity: (peripheralOpacity: number) => void;
}

function PeripheralVisionTechnique({
  peripheralVision,
  setPeripheralVision,
  leftMargin,
  setLeftMargin,
  rightMargin,
  setRightMargin,
  peripheralOpacity,
  setPeripheralOpacity,
}: PeripheralVisionTechniqueProps) {
  const size = useResizeScreen();
  const sizeScreen = size[0] > 768;
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
          <h2>Peripheral Vision</h2>
          <HoverInformation
            icon={<HelpCircle className="w-4 h-4 ml-2 cursor-help" />}
            title="Peripheral Vision"
            description="Peripheral Vision is a technique that allows you to read faster by using your peripheral vision to read the text."
          />
        </div>
        <Switch
          onCheckedChange={setPeripheralVision}
          checked={peripheralVision}
        />
      </div>
      {peripheralVision && (
        <div className="mb-4">
          <div role="presentation" className="relative mt-4 ">
            <Label
              htmlFor="leftMargin"
              className="flex mb-4 text-sm text-muted-foreground"
            >
              Left Margin
            </Label>

            <Slider
              className="mt-4"
              aria-label={`Left Margin` + leftMargin + "px"}
              defaultValue={[leftMargin]}
              onValueChange={(value) => setLeftMargin(value[0])}
              min={sizeScreen ? 60 : 30}
              max={sizeScreen ? 180 : 100}
              step={1}
              id="leftMargin"
            />
            <span
              aria-label="Current Margin"
              className="absolute top-0 right-0 mt-1 mr-2 text-sm text-muted-foreground"
            >
              {leftMargin} px
            </span>
          </div>
          <div role="presentation" className="relative ">
            <Label
              htmlFor="rightMargin"
              className="flex mt-4 mb-4 text-sm text-muted-foreground"
            >
              Right Margin
            </Label>

            <Slider
              className=""
              aria-label={`Right Margin` + rightMargin + "px"}
              defaultValue={[rightMargin]}
              onValueChange={(value) => setRightMargin(value[0])}
              min={sizeScreen ? 60 : 30}
              max={sizeScreen ? 180 : 100}
              step={5}
              id="rightMargin"
            />
            <span
              aria-label="Current Margin"
              className="absolute top-0 right-0 mr-2 text-sm text-muted-foreground"
            >
              {rightMargin} px
            </span>
          </div>
          <div role="presentation" className="relative ">
            <Label
              htmlFor="opacity"
              className="flex mt-4 mb-4 text-sm text-muted-foreground"
            >
              Opacity <Blend className="w-4 h-4 ml-2" />
            </Label>

            <Slider
              
              aria-label={`Opacity` + peripheralOpacity + "%"}
              defaultValue={[peripheralOpacity]}
              onValueChange={(value) => setPeripheralOpacity(value[0])}
              min={0}
              max={1}
              step={0.1}
              id="opacity"
            />
            <span
              aria-label="Current Opacity"
              className="absolute top-0 right-0 mr-2 text-sm text-muted-foreground"
            >
              {peripheralOpacity} %
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PeripheralVisionTechnique;
