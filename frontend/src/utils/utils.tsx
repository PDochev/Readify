export function boldingWords(str) {
  let words = str.split(" ");
  let boldedWords = words.map(function (word, index) {
    if (word.length >= 7) {
      return (
        <>
          <span key={index} style={{ fontWeight: "bold" }}>
            {word.slice(0, 5)}
          </span>
          {word.slice(5)}{" "}
        </>
      );
    } else if (word.length >= 5) {
      return (
        <>
          <span key={index} style={{ fontWeight: "bold" }}>
            {word.slice(0, 3)}
          </span>
          {word.slice(3)}{" "}
        </>
      );
    } else if (word.length >= 3) {
      return (
        <>
          <span key={index} style={{ fontWeight: "bold" }}>
            {word.slice(0, 2)}
          </span>
          {word.slice(2)}{" "}
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
