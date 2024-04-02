import { useTheme } from "@/components/ui/theme-provider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Theme = "light" | "dark" | "system";

function ThemeToggle() {
  const { setTheme } = useTheme();

  const currTheme = localStorage.getItem("vite-ui-theme");

  const handleThemeChange = (theme: Theme) => {
    localStorage.setItem("vite-ui-theme", theme);
    setTheme(theme);
  };

  return (
    <RadioGroup
      className="w-full flex items-center justify-between mt-2"
      defaultValue={currTheme || "system"}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          onClick={() => handleThemeChange("light")}
          value="light"
          id="light"
        />
        <Label htmlFor="light">Light</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          onClick={() => handleThemeChange("dark")}
          value="dark"
          id="dark"
        />
        <Label htmlFor="dark">Dark</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          onClick={() => handleThemeChange("system")}
          value="system"
          id="system"
        />
        <Label htmlFor="system">System</Label>
      </div>
    </RadioGroup>
  );
}

export default ThemeToggle;
