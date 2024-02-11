interface StatsComponentProps {
  wordsCount: number;
  charactersCount: number;
}

function Stats({ wordsCount, charactersCount }: StatsComponentProps) {
  return (
    <div className="flex flex-col items-start">
      <p className="text-sm text-muted-foreground">
        Words: <span className="">{wordsCount}</span>
      </p>
      <p className="text-sm text-muted-foreground">
        Characters: <span className="">{charactersCount}</span>
      </p>
    </div>
  );
}

export default Stats;
