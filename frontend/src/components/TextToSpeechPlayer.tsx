import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { SynthesizeSpeechOutput } from "@aws-sdk/client-polly";

interface TextToSpeechPlayerProps {
  audioFile: SynthesizeSpeechOutput | null;
}

function TextToSpeechPlayer({ audioFile }: TextToSpeechPlayerProps) {
  const [isRunning, setIsRunning] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // useEffect(() => {
  //   if (audioFile) {
  //     const audioArrayBuffer = audioFile?.AudioStream as Buffer;
  //     const audioURL = URL.createObjectURL(
  //       new Blob([audioArrayBuffer], { type: "audio/mpeg" })
  //     );
  //     const audio = audioRef.current;
  //     if (audio) {
  //       audio.src = audioURL;
  //     }
  //     return () => {
  //       URL.revokeObjectURL(audioURL);
  //     };
  //   }
  // }, [audioFile]);

  //   const togglePlay = () => {
  //     const audio = audioRef.current;
  //     if (isRunning) {
  //       audio.pause();
  //     } else {
  //       audio.play();
  //     }
  //     setIsRunning(!isRunning);
  //   };

  useEffect(() => {
    if (audioFile && audioFile.AudioStream) {
      const audioStream = audioFile.AudioStream as ReadableStream;
      let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;

      if (!audioStream.locked) {
        // If the stream is not locked, create a new reader
        reader = audioStream.getReader();
      }

      if (reader) {
        const audioChunks: Uint8Array[] = [];

        reader.read().then(function process({ done, value }) {
          if (done) {
            const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
            const audioURL = URL.createObjectURL(audioBlob);
            const audio = audioRef.current;
            if (audio) {
              audio.src = audioURL;
            }
            return;
          }
          audioChunks.push(value);
          reader?.read().then(process);
        });
      }
    }
  }, [audioFile]);

  const handleStart = () => {
    const audio = audioRef.current;
    if (isRunning) return;
    audio?.play();
    setIsRunning(true);

    // timeInterval.current = setInterval(() => {
    //   setHighlightIndex((highlightIndex) => (highlightIndex + 1) % wordsCount);
    // }, speed);
  };

  const handleStop = () => {
    const audio = audioRef.current;
    if (!isRunning) return;
    audio?.pause();
    setIsRunning(false);
    // clearInterval(timeInterval.current);
  };

  return (
    <div className="fixed w-48 h-12 -translate-x-1/2 rounded jus bottom-5 left-1/2 bg-primary text-primary-foreground">
      <div className="flex items-center justify-center h-full gap-2 ">
        <SkipBack className="cursor-pointer" />
        {isRunning ? (
          <Pause className="cursor-pointer" onClick={handleStop} />
        ) : (
          <Play className="cursor-pointer" onClick={handleStart} />
        )}
        <SkipForward className="cursor-pointer" />
      </div>
      <audio ref={audioRef} hidden />
    </div>
  );
}

export default TextToSpeechPlayer;
