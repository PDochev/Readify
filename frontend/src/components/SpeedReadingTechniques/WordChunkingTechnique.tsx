import { Label } from "@radix-ui/react-label";
import HoverInformation from "../HoverInformation";
import { HelpCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface WordChunkingTechniqueProps {
  wordChunking: number;
  setWordChunking: (wordChunking: number) => void;
}

function WordChunkingTechnique({
  wordChunking,
  setWordChunking,
}: WordChunkingTechniqueProps) {
  return (
    <div
      role="presentation"
      className="relative flex flex-col items-start  mt-4"
    >
      <div className="flex ">
        <Label
          htmlFor="wordChunking"
          className="mb-4 text-sm text-muted-foreground"
        >
          Word Chunking
        </Label>
        <HoverInformation
          icon={<HelpCircle className="w-4 h-4 ml-2 cursor-help mt-[2px] " />}
          title="Word Chunking"
          description="Words chunking is a technique that involves grouping words together to read them in chunks. This can help to reduce subvocalization and increase reading speed. The number of words in each chunk can be adjusted to suit the reader's preference."
        />
      </div>
      <Slider
        aria-label={wordChunking + "words"}
        defaultValue={[wordChunking]}
        onValueChange={(value) => setWordChunking(value[0])}
        min={1}
        max={10}
        step={1}
        id="wordChunking"
      />
      <span
        aria-label="Current number of words chunking"
        className="absolute top-0 right-0  mr-2  text-sm text-muted-foreground"
      >
        {wordChunking} words
      </span>
    </div>
  );
}

export default WordChunkingTechnique;
