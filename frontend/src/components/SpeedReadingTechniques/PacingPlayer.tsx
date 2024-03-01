import { Play, Pause, SkipForward, SkipBack, Plus, Minus } from "lucide-react";
import { useState, useRef } from "react";

function PacingPlayer({ highlightIndex, wordsCount, setHighlightIndex }) {
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(370);

  const timeInterval = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setHighlightIndex((highlightIndex) => (highlightIndex + 1) % wordsCount);
    }, speed);
  };

  const handleStop = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current);
  };

  const handleNextWord = () => {
    setHighlightIndex((highlightIndex) => highlightIndex + 1);
  };

  const handlePreviousWord = () => {
    setHighlightIndex((highlightIndex) => highlightIndex - 1);
  };

  const handleIncreaseSpeed = () => {
    setSpeed((currSpeed) => currSpeed - 10);
  };

  const handleDecreaseSpeed = () => {
    setSpeed((currSpeed) => currSpeed + 10);
  };

  //   const handleReset = () => {
  //     setIsRunning(false);
  //     clearInterval(timeInterval.current);
  //   };
  return (
    <div className="fixed w-48 h-10 -translate-x-1/2 rounded jus bottom-5 left-1/2 bg-primary text-primary-foreground">
      <div className="flex items-center justify-center h-full gap-2">
        <Minus className="cursor-pointer " onClick={handleDecreaseSpeed} />
        <SkipBack className="cursor-pointer" onClick={handlePreviousWord} />
        {isRunning ? (
          <Pause className="cursor-pointer" onClick={handleStop} />
        ) : (
          <Play className="cursor-pointer" onClick={handleStart} />
        )}
        <SkipForward className="cursor-pointer" onClick={handleNextWord} />
        <Plus className="cursor-pointer" onClick={handleIncreaseSpeed} />
      </div>
    </div>
  );
}

export default PacingPlayer;
