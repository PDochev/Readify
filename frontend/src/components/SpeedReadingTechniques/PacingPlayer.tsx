import { Play, Pause, SkipForward, SkipBack, Plus, Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface PacingPlayerProps {
  highlightIndex: number;
  setHighlightIndex: (highlightIndex: number) => void;
  wordsCount: number;
  wordChunking: number;
}

function PacingPlayer({
  highlightIndex,
  wordsCount,
  setHighlightIndex,
  wordChunking,
}: PacingPlayerProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(400);

  const timeInterval = useRef(null);

  useEffect(() => {
    if (isRunning) {
      clearInterval(timeInterval.current);
      timeInterval.current = setInterval(() => {
        setHighlightIndex(
          (highlightIndex) => (highlightIndex + wordChunking) % wordsCount
        );
      }, speed);
    }
    return () => clearInterval(timeInterval.current);
  }, [isRunning, setHighlightIndex, speed, wordsCount, wordChunking]);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    // timeInterval.current = setInterval(() => {
    //   setHighlightIndex((highlightIndex) => (highlightIndex + 1) % wordsCount);
    // }, speed);
  };

  const handleStop = () => {
    if (!isRunning) return;
    setIsRunning(false);
    // clearInterval(timeInterval.current);
  };

  const handleNextWord = () => {
    setHighlightIndex(
      (highlightIndex: number) => highlightIndex + wordChunking
    );
  };

  const handlePreviousWord = () => {
    setHighlightIndex(
      (highlightIndex: number) => highlightIndex - wordChunking
    );
  };

  const handleIncreaseSpeed = () => {
    setSpeed((currSpeed) => currSpeed - 10);
  };

  const handleDecreaseSpeed = () => {
    setSpeed((currSpeed) => currSpeed + 10);
  };

  //   const handleReset = () => {
  //     setIsRunning(false);s
  //     clearInterval(timeInterval.current);
  //   };
  return (
    <div className="fixed w-48 h-12 -translate-x-1/2 rounded jus bottom-5 left-1/2 bg-primary text-primary-foreground">
      <div className="flex items-center justify-center h-full gap-2 ">
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
