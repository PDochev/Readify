import { Button } from "./ui/button";
import { useState, useRef } from "react";

function Stopwatch({ wordsCount }) {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeInterval = useRef(null);

  const wpm = Math.floor(wordsCount / timer);

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
    clearInterval(timeInterval.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setTimer(0);
  };

  const formatTime = (timer) => {
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
      className="flex flex-col justify-center items-center gap-5 mx-auto mt-4"
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
        {!isRunning && <p>Your Reading speed is {wpm} words per minute!</p>}
      </div>
    </div>
  );
}

export default Stopwatch;
