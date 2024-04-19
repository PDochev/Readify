import { Button } from "./ui/button";

interface StopwatchProps {
  wordsCount: number;
  timer: number;
  isRunning: boolean;
  handleStartTimer: () => void;
  handleStopTimer: () => void;
  handleResetTimer: () => void;
}

function Stopwatch({
  wordsCount,
  timer,
  isRunning,
  handleStartTimer,
  handleStopTimer,
  handleResetTimer,
}: StopwatchProps) {
  const wpm = timer > 0 ? Math.floor(wordsCount / (timer / 6000)) : 0;

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
          onClick={isRunning ? handleStopTimer : handleStartTimer}
          variant="destructive"
        >
          {isRunning ? "Stop" : "Start"}
        </Button>

        <Button onClick={handleResetTimer}>Reset</Button>
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
