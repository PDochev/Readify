import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Speech } from "lucide-react";
import { HelpCircle } from "lucide-react";
import HoverInformation from "./HoverInformation";
import { Switch } from "@/components/ui/switch";
// import AWS from "aws-sdk";
import {
  PollyClient,
  SynthesizeSpeechCommand,
  SynthesizeSpeechOutput,
  SynthesizeSpeechInput,
} from "@aws-sdk/client-polly";

// AWS.config.update({
//   accessKeyId: import.meta.env.VITE_AWS_KEY,
//   secretAccessKey: import.meta.env.VITE_AWS_SECRET,
//   region: import.meta.env.VITE_AWS_REGION,
// });

// const polly = new AWS.Polly();

const client = new PollyClient({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET,
  },
});

interface TextToSpeechProps {
  textToSpeech: boolean;
  setTextToSpeech: (textToSpeech: boolean) => void;
  text: string;
  voice: string;
  setVoice: (voice: string) => void;
  setAudioFile: (audioFile: SynthesizeSpeechOutput) => void;
}

function TextToSpeech({
  textToSpeech,
  setTextToSpeech,
  setAudioFile,
  text,
  voice,
  setVoice,
}: TextToSpeechProps) {
  const convertTextToSpeech = async () => {
    const input = {
      Text: text,
      OutputFormat: "mp3",
      VoiceId: voice,
    };
    const command = new SynthesizeSpeechCommand(input as SynthesizeSpeechInput);
    try {
      const response = await client.send(command);
      setAudioFile(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSwitch = () => {
    setTextToSpeech(!textToSpeech);
    convertTextToSpeech();
  };

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Speech
            className="cursor-pointer"
            aria-label="Open text page colour menu"
            role="button"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52" role="menu">
          <div className="flex flex-row items-center justify-between">
            <DropdownMenuLabel>Text to Speech</DropdownMenuLabel>
            <HoverInformation
              icon={<HelpCircle className="w-4 h-4 mr-6 cursor-help" />}
              title="Text to speech"
              description="Enabling this feature allows the text on the page to be converted into speech using AWS Polly.
               First, select the desired voice from the dropdown menu below and then enable it by toggling the switch. 
              If you want to select a new voice, you'll need to disable the feature first and then enable it again once you have made your selection."
            />
            <Switch
              className="mr-2"
              checked={textToSpeech}
              onCheckedChange={handleSwitch}
            />
          </div>
          <DropdownMenuSeparator />
          <div
            role="presentation"
            className="flex items-center justify-between mt-4 mb-4"
          >
            <p className="text-sm self-center text-muted-foreground ml-2">
              Voice
            </p>

            <Select defaultValue={voice} onValueChange={setVoice}>
              <SelectTrigger className="mr-2 w-[100px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Joanna">Joanna</SelectItem>
                <SelectItem value="Kimberly">Kimberly</SelectItem>
                <SelectItem value="Justin">Justin</SelectItem>
                <SelectItem value="Joey">Joey</SelectItem>
                <SelectItem value="Matthew">Matthew</SelectItem>
                <SelectItem value="Ivy">Ivy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TextToSpeech;
