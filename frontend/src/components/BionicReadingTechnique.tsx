import { Switch } from "@/components/ui/switch";

function BionicReadingTechnique({ setBoldedWords }) {
  return (
    <div
      role="presentation"
      className="flex flex-row items-center justify-between p-3 border rounded-lg shadow-sm "
    >
      <h2>Bionic Reading</h2>
      <Switch onCheckedChange={setBoldedWords} />
    </div>
  );
}

export default BionicReadingTechnique;
