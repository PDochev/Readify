import { Button } from "./ui/button";
import { useState, useRef } from "react";

interface StopwatchProps {
  wordsCount: number;
}

function Stopwatch({ wordsCount }: StopwatchProps) {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeInterval = useRef<NodeJS.Timeout | null>(null);

  const wpm = timer > 0 ? Math.floor(wordsCount / (timer / 6000)) : 0;

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);
  };

  const handleStop = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current!);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current!);
    setTimer(0);
  };

  const formatTime = (timer: number) => {
    const minutes = Math.floor((timer % 360000) / 6000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timer % 6000) / 100)
      .toString()
      .padStart(2, "0");

    return { minutes, seconds };
  };

  const { minutes, seconds } = formatTime(timer);
  return (
    <div
      role="presentation"
      className="flex flex-col items-center justify-center gap-5 mx-auto mt-4"
    >
      <div className="flex">
        <h2>{minutes}</h2>
        <span>:</span>
        <h2>{seconds}</h2>
      </div>

      <div className="flex gap-5">
        <Button
          onClick={isRunning ? handleStop : handleStart}
          variant="destructive"
        >
          {isRunning ? "Stop" : "Start"}
        </Button>

        <Button onClick={handleReset}>Reset</Button>
      </div>
      <div>
        {!isRunning && timer > 0 ? (
          <p>Your Reading speed is {wpm} words per minute!</p>
        ) : null}
      </div>
    </div>
  );
}

export default Stopwatch;
