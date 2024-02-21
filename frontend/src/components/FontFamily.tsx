import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FontFamilyProps {
  fontFamily: string;
  setFontFamily: (fontFamily: string) => void;
}

function FontFamily({ fontFamily, setFontFamily }: FontFamilyProps) {
  return (
    <div role="presentation" className="flex items-center justify-between mt-4">
      <p className="text-sm self-center text-muted-foreground ">Font family</p>
      <Select  onValueChange={setFontFamily} defaultValue={fontFamily}>
        <SelectTrigger className=" w-[140px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Inter">Inter</SelectItem>
          <SelectItem value="Montserrat">Montserrat</SelectItem>
          <SelectItem value="Poppins">Poppins</SelectItem>
          <SelectItem value="Roboto Serif">Roboto Serif</SelectItem>
          <SelectItem value="Georgia">Georgia</SelectItem>
          <SelectItem value="Playfair Display">Playfair Display</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default FontFamily;
