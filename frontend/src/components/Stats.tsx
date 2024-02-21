interface StatsComponentProps {
  wordsCount: number;
  charactersCount: number;
}

function Stats({ wordsCount, charactersCount }: StatsComponentProps) {
  return (
    <div role="presentation" className="flex flex-col items-start">
      <p className="text-sm text-muted-foreground">
        Words:{" "}
        <span
          aria-label={`Number of words in the text` + wordsCount}
          className=""
        >
          {wordsCount}
        </span>
      </p>
      <p className="text-sm text-muted-foreground">
        Characters:{" "}
        <span
          aria-label={`Number of character in the text` + charactersCount}
          className=""
        >
          {charactersCount}
        </span>
      </p>
    </div>
  );
}

export default Stats;
