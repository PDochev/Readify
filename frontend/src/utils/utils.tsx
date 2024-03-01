export function boldingWords(str: string, fixation: number) {
  const words = str.split(" ");
  const boldedWords = words.map(function (word, index) {
    if (word.length >= fixation) {
      return (
        <>
          <span key={index} style={{ fontWeight: "bold" }}>
            {word.slice(0, fixation - 1)}
          </span>
          {word.slice(fixation - 1)}{" "}
        </>
      );
    } else if (word.length >= 5) {
      return (
        <>
          <span key={index} style={{ fontWeight: "bold" }}>
            {word.slice(0, fixation - 4)}
          </span>
          {word.slice(fixation - 4)}{" "}
        </>
      );
    } else if (word.length >= 3) {
      return (
        <>
          <span key={index} style={{ fontWeight: "bold" }}>
            {word.slice(0, fixation - 5)}
          </span>
          {word.slice(fixation - 5)}{" "}
        </>
      );
    } else if (word.length === 1) {
      return (
        <>
          <span key={index} style={{ fontWeight: "bold" }}>
            {word.slice(0, 1)}
          </span>
          {word.slice(1)}{" "}
        </>
      );
    } else {
      return word + " ";
    }
  });

  return boldedWords;
}
