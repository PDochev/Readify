import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PacerColourProps {
  pacerColour: string;
  setPacerColour: (pacerColour: string) => void;
}

function PacerColour({ pacerColour, setPacerColour }: PacerColourProps) {
  return (
    <div className="flex">
      <RadioGroup
        className="flex items-center mx-auto gjustify-between  "
        defaultValue={pacerColour}
        onValueChange={setPacerColour}
      >
        <RadioGroupItem
          className="w-5 h-5 border-foreground"
          style={{ backgroundColor: "#ffacb8" }}
          value="#ffacb8"
          id="option-one"
        />

        <RadioGroupItem
          className="w-5 h-5 border-foreground"
          style={{ backgroundColor: "#ade1c3" }}
          value="#ade1c3"
          id="option-two"
        />

        <RadioGroupItem
          className="w-5 h-5 border-foreground"
          style={{ backgroundColor: "#ffd2a4" }}
          value="#ffd2a4"
          id="option-two"
        />

        <RadioGroupItem
          className="w-5 h-5 border-foreground"
          style={{ backgroundColor: "#b8b7ee" }}
          value="#b8b7ee"
          id="option-two"
        />

        <RadioGroupItem
          className="w-5 h-5 border-foreground"
          style={{ backgroundColor: "#cfcfd1" }}
          value="#cfcfd1"
          id="option-two"
        />
      </RadioGroup>
    </div>
  );
}

export default PacerColour;
