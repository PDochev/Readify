import { useTheme } from "@/components/ui/theme-provider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <RadioGroup
      className="w-full flex items-center justify-between mt-2"
      defaultValue="system"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          onClick={() => setTheme("light")}
          value="light"
          id="light"
        />
        <Label htmlFor="light">Light</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          onClick={() => setTheme("dark")}
          value="dark"
          id="dark"
        />
        <Label htmlFor="dark">Dark</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          onClick={() => setTheme("system")}
          value="system"
          id="system"
        />
        <Label htmlFor="system">System</Label>
      </div>
    </RadioGroup>
  );
}

export default ThemeToggle;
