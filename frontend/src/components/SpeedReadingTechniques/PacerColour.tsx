import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PacerColourProps {
  pacerColour: string;
  setPacerColour: (pacerColour: string) => void;
}

function PacerColour({ pacerColour, setPacerColour }: PacerColourProps) {
  return (
    <div className="flex">
      <RadioGroup
        className="flex items-center mx-auto gjustify-between"
        defaultValue={pacerColour}
        onValueChange={setPacerColour}
      >
        <RadioGroupItem
          className="w-5 h-5"
          style={{ backgroundColor: "#ff375f" }}
          value="#ff375f"
          id="option-one"
        />

        <RadioGroupItem
          className="w-5 h-5"
          style={{ backgroundColor: "#1cac69" }}
          value="#1cac69"
          id="option-two"
        />

        <RadioGroupItem
          className="w-5 h-5"
          style={{ backgroundColor: "#ff9f0b" }}
          value="#ff9f0b"
          id="option-two"
        />

        <RadioGroupItem
          className="w-5 h-5"
          style={{ backgroundColor: "#5e5ce6" }}
          value="#5e5ce6"
          id="option-two"
        />

        <RadioGroupItem
          className="w-5 h-5"
          style={{ backgroundColor: "#98989d" }}
          value="#98989d"
          id="option-two"
        />
      </RadioGroup>
    </div>
  );
}

export default PacerColour;
