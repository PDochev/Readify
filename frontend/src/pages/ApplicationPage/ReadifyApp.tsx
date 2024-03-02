import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
import SpeedReadingMenu from "@/components/SpeedReadingMenu";
import TextPageColour from "@/components/TextPageColour";
import { boldingWords } from "@/utils/utils";
import Spinner from "@/components/Spinner";
import { useResizeScreen } from "@/customHooks/useResizeScreen";
import PacingPlayer from "@/components/SpeedReadingTechniques/PacingPlayer";

function ReadifyApp() {
  const { id } = useParams();
  const size = useResizeScreen();
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [textSize, setTextSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Inter");
  const [lineSpacing, setLineSpacing] = useState(24);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textPageColour, setTextPageColour] = useState("pageColourDefault");
  const [pacerColour, setPacerColour] = useState("#ff375f");
  const [boldedWords, setBoldedWords] = useState(false);
  const [fixation, setFixation] = useState(7);
  const [peripheralVision, setPeripheralVision] = useState(false);
  const [leftMargin, setLeftMargin] = useState(size[0] > 768 ? 120 : 80);
  const [rightMargin, setRightMargin] = useState(size[0] > 768 ? 120 : 80);
  const [peripheralOpacity, setPeripheralOpacity] = useState(0.8);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [pacingTechnique, setPacingTechnique] = useState(false);
  const [wordChunking, setWordChunking] = useState(1);

  const title = document.title;
  const text = document.text || "";

  const wordsCount: number = text.split(" ").length;
  const charactersCount: number = text.trim().length;

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setHighlightIndex((highlightIndex) => (highlightIndex + 1) % wordsCount);
  //   }, 300);
  //   return () => clearTimeout(interval);
  // }, [highlightIndex, wordsCount]);

  useEffect(() => {
    async function fetchDocuments() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`http://localhost:3000/documents/${id}`);

        if (!res.ok) {
          throw new Error("Something went wrong with fetching docments");
        }
        const data = await res.json();
        if (data.Response === "False") throw new Error("Document not found");
        setDocument(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Something went wrong , failed to load Documents.");
      } finally {
        setLoading(false);
      }
    }
    fetchDocuments();
  }, [id]);

  function highlightWord(
    str: string,
    startIndex: number,
    highlightLength: number
  ) {
    const words = str.split(" ");
    const highlightedText = words.map((word, index) => {
      if (index >= startIndex && index < startIndex + highlightLength) {
        return (
          <span
            className=""
            key={index}
            style={{ backgroundColor: `${pacerColour}` }}
          >
            {word}{" "}
          </span>
        );
      } else {
        return <span key={index}>{word} </span>;
      }
    });
    return highlightedText;
  }

  return (
    <>
      <header>
        <nav
          role="navigation"
          className="fixed top-0 left-0 z-10 w-full bg-white "
        >
          <Navbar>
            <div className="flex items-center justify-between w-full m-2">
              <h4 className="flex ml-4 text-xl font-semibold tracking-tight scroll-m-20 ">
                <Link to="/documents">Readify</Link>
              </h4>

              <div className="flex gap-4 mr-2 lg:gap-8 lg:mr-4">
                <TextPageColour
                  textPageColour={textPageColour}
                  setTextPageColour={setTextPageColour}
                />
                <SpeedReadingMenu
                  setBoldedWords={setBoldedWords}
                  boldedWords={boldedWords}
                  fixation={fixation}
                  setFixation={setFixation}
                  peripheralVision={peripheralVision}
                  setPeripheralVision={setPeripheralVision}
                  leftMargin={leftMargin}
                  setLeftMargin={setLeftMargin}
                  rightMargin={rightMargin}
                  setRightMargin={setRightMargin}
                  peripheralOpacity={peripheralOpacity}
                  setPeripheralOpacity={setPeripheralOpacity}
                  pacingTechnique={pacingTechnique}
                  setPacingTechnique={setPacingTechnique}
                  pacerColour={pacerColour}
                  setPacerColour={setPacerColour}
                  wordChunking={wordChunking}
                  setWordChunking={setWordChunking}
                />
                <SideMenu
                  wordsCount={wordsCount}
                  charactersCount={charactersCount}
                  setTextSize={setTextSize}
                  textSize={textSize}
                  fontFamily={fontFamily}
                  setFontFamily={setFontFamily}
                  lineSpacing={lineSpacing}
                  setLineSpacing={setLineSpacing}
                  letterSpacing={letterSpacing}
                  setLetterSpacing={setLetterSpacing}
                />
              </div>
            </div>
          </Navbar>
        </nav>
      </header>
      <main>
        <section
          className={` mx-auto mt-14  rounded-sm shadow-sm h-fit flex flex-col  items-center  overflow-x-hidden  border  lg:w-1/2 lg:mt-32 lg:mb-10 bg-textPageColours-${textPageColour} relative z-0`}
        >
          {peripheralVision && (
            <div
              style={{
                width: `${leftMargin}px`,
                opacity: `${peripheralOpacity}`,
              }}
              className={`absolute top-0 left-0  h-full border-r-2 border-slate-400 bg-inherit `}
            ></div>
          )}
          {loading && <Spinner />}
          <div className="mt-10 mb-5">
            <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
              {title}
            </h3>
          </div>
          <div className="w-11/12 ">
            {error && (
              <p className="leading-7 [&:not(:first-child)]:mt-6">{error}</p>
            )}
            <p
              style={{
                fontSize: `${textSize}px`,
                fontFamily: `${fontFamily} , sans-serif`,
                lineHeight: `${lineSpacing}px`,
                letterSpacing: `${letterSpacing}px`,
              }}
              className="indent-8 whitespace-pre-line pb-10 px-6 mx-auto md:max-w-[80ch] text-left lg:max-w-[90ch]  [&:not(:first-child)]:mt-6  "
            >
              {boldedWords
                ? boldingWords(text, fixation).map((word, index) => (
                    <span key={index}>
                      {pacingTechnique && highlightIndex === index ? (
                        <span
                          className=""
                          style={{ backgroundColor: `${pacerColour}` }}
                        >
                          {word}
                        </span>
                      ) : (
                        <span>{word}</span>
                      )}
                    </span>
                  ))
                : pacingTechnique
                ? highlightWord(text, highlightIndex, wordChunking)
                : text}
            </p>
          </div>
          {peripheralVision && (
            <div
              style={{
                width: `${rightMargin}px`,
                opacity: `${peripheralOpacity}`,
              }}
              className={`absolute top-0 right-0  h-full border-l-2 border-slate-400 bg-inherit `}
            ></div>
          )}
        </section>
      </main>
      {pacingTechnique && (
        <PacingPlayer
          highlightIndex={highlightIndex}
          wordsCount={wordsCount}
          setHighlightIndex={setHighlightIndex}
          wordChunking={wordChunking}
        />
      )}
    </>
  );
}

export default ReadifyApp;

//paragraph - lg:px-0
//paragraph - text-justify
