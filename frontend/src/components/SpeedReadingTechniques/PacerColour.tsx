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
          style={{ backgroundColor: "#e11d48" }}
          value="#e11d48"
          id="option-one"
        />

        <RadioGroupItem
          className="w-5 h-5"
          style={{ backgroundColor: "#17a34a" }}
          value="#17a34a"
          id="option-two"
        />

        <RadioGroupItem
          className="w-5 h-5"
          style={{ backgroundColor: "#f97315" }}
          value="#f97315"
          id="option-two"
        />

        <RadioGroupItem
          className="w-5 h-5"
          style={{ backgroundColor: "#2463eb" }}
          value="#2463eb"
          id="option-two"
        />

        <RadioGroupItem
          className="w-5 h-5"
          style={{ backgroundColor: "#939393" }}
          value="#939393"
          id="option-two"
        />
      </RadioGroup>
    </div>
  );
}

export default PacerColour;
