import { Switch } from "@/components/ui/switch";

function BionicReadingTechnique({ setBoldedWords, boldedWords }) {
  return (
    <div
      role="presentation"
      className="flex flex-row items-center justify-between p-3 mt-4 border rounded-lg shadow-sm "
    >
      <h2>Bionic Reading</h2>
      <Switch onCheckedChange={setBoldedWords} checked={boldedWords} />
    </div>
  );
}

export default BionicReadingTechnique;
