import { Play, Pause, SkipForward, SkipBack } from "lucide-react";

import { useState, useRef } from "react";

function PacingPlayer({ highlightIndex, wordsCount, setHighlightIndex }) {
  const [isRunning, setIsRunning] = useState(false);

  const timeInterval = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setHighlightIndex((highlightIndex) => (highlightIndex + 1) % wordsCount);
    }, 300);
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

  //   const handleReset = () => {
  //     setIsRunning(false);
  //     clearInterval(timeInterval.current);
  //   };
  return (
    <div className="fixed w-48 h-10 -translate-x-1/2 rounded jus bottom-5 left-1/2 bg-primary text-primary-foreground">
      <div className="flex items-center justify-center h-full">
        <SkipBack onClick={handlePreviousWord} />
        {isRunning ? (
          <Pause onClick={handleStop} />
        ) : (
          <Play onClick={handleStart} />
        )}
        <SkipForward onClick={handleNextWord} />
      </div>
    </div>
  );
}

export default PacingPlayer;
