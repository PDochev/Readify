import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
import SpeedReadingMenu from "@/components/SpeedReadingMenu";
import TextPageColour from "@/components/TextPageColour";
import { boldingWords } from "@/utils/utils";
import Spinner from "@/components/Spinner";
import { useResizeScreen } from "@/customHooks/useResizeScreen";
import PacingPlayer from "@/components/SpeedReadingTechniques/PacingPlayer";
import ErrorMessage from "@/components/ErrorMessage";
import PeripheralVisionMargin from "@/components/SpeedReadingTechniques/PeripheralVisionMargin";
import { useAuthorization } from "@/context/AuthContext";
import NotLogged from "@/components/NotLogged";
import { Button } from "@/components/ui/button";
import TextToSpeech from "@/components/TextToSpeech";
import TextToSpeechPlayer from "@/components/TextToSpeechPlayer";
import { TimerOff } from "lucide-react";
import { SynthesizeSpeechOutput } from "@aws-sdk/client-polly";

function ReadifyApp() {
  const { id } = useParams();
  const authorization = useAuthorization();
  const user = authorization?.user;
  const size = useResizeScreen();
  // const [document, setDocument] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [textSize, setTextSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Inter");
  const [lineSpacing, setLineSpacing] = useState(24);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textPageColour, setTextPageColour] = useState("pageColourDefault");
  const [pacerColour, setPacerColour] = useState("#ffacb8");
  const [boldedWords, setBoldedWords] = useState(false);
  const [fixation, setFixation] = useState(7);
  const [peripheralVision, setPeripheralVision] = useState(false);
  const [leftMargin, setLeftMargin] = useState(size[0] > 768 ? 120 : 80);
  const [rightMargin, setRightMargin] = useState(size[0] > 768 ? 120 : 80);
  const [peripheralOpacity, setPeripheralOpacity] = useState(0.5);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [pacingTechnique, setPacingTechnique] = useState(false);
  const [wordChunking, setWordChunking] = useState(1);
  const [stopRegression, setStopRegression] = useState(false);
  const [regressionOpacity, setRegressionOpacity] = useState(0.5);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [audioFile, setAudioFile] = useState<SynthesizeSpeechOutput | null>(
    null
  );
  const [voiceTTS, setVoiceTTS] = useState("Joanna");

  // const title = document.title;
  // const text = document.text || "";

  const timeInterval = useRef<NodeJS.Timeout | null>(null);

  const wordsCount: number = useMemo(() => text?.split(" ").length, [text]);
  const charactersCount: number = useMemo(() => text?.trim().length, [text]);

  const textColourIfTextPageColourApplied =
    textPageColour === "pageColour1" ||
    textPageColour === "pageColour2" ||
    textPageColour === "pageColour3" ||
    textPageColour === "pageColour4"
      ? { color: "#000000" }
      : {};

  useEffect(() => {
    async function fetchDocuments() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `https://readifyapp-backend.onrender.com/documents/${id}`,
          {
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Something went wrong with fetching docments");
        }
        const data = await res.json();
        if (data.Response === "False") throw new Error("Document not found");
        // setDocument(data);
        setTitle(data.title);
        setText(data.text);
        setLoading(false);
      } catch (err) {
        console.log(err);
        {
          user
            ? setError("Something went wrong , failed to load Documents.")
            : setError("You must login first");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchDocuments();
  }, [id, user]);

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
      } else if (index <= startIndex) {
        return (
          <span
            style={stopRegression ? { opacity: regressionOpacity } : {}}
            key={index}
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

  const handleStartTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 100);
    }, 1000);
    return () => clearInterval(timeInterval.current!);
  };

  const handleStopTimer = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current!);
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current!);
    setTimer(0);
  };

  return (
    <>
      <header>
        <nav
          role="navigation"
          className="fixed top-0 left-0 z-10 w-screen  bg-background "
        >
          <Navbar>
            <div className="flex items-center justify-between w-full m-2">
              <h4 className="flex items-center ml-2 lg:ml-4 md:ml-4 text-xl font-semibold tracking-tight scroll-m-20 ">
                <Link to="/documents">Readify</Link>
                {isRunning && (
                  <Button
                    variant="destructive"
                    onClick={handleStopTimer}
                    className="w-[46px] h-8 ml-2 lg:w-20 md:w-20 lg:ml-4 md:ml-4"
                  >
                    {size[0] < 768 ? <TimerOff /> : "Stop Timer"}
                  </Button>
                )}
              </h4>

              <div className="flex gap-4 mr-2 lg:gap-8 md:gap-8 lg:mr-4">
                {!pacingTechnique && (
                  <TextToSpeech
                    textToSpeech={textToSpeech}
                    setTextToSpeech={setTextToSpeech}
                    setAudioFile={setAudioFile}
                    voice={voiceTTS}
                    setVoice={setVoiceTTS}
                    text={text}
                  />
                )}
                <TextPageColour
                  textPageColour={textPageColour}
                  setTextPageColour={setTextPageColour}
                />
                {!textToSpeech && (
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
                    stopRegression={stopRegression}
                    setStopRegression={setStopRegression}
                    regressionOpacity={regressionOpacity}
                    setRegressionOpacity={setRegressionOpacity}
                  />
                )}

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
                  timer={timer}
                  isRunning={isRunning}
                  handleStartTimer={handleStartTimer}
                  handleStopTimer={handleStopTimer}
                  handleResetTimer={handleResetTimer}
                />
              </div>
            </div>
          </Navbar>
        </nav>
      </header>
      <main>
        <section
          className={`mx-auto mt-14 rounded-sm shadow-sm h-fit flex flex-col  items-center  overflow-x-hidden  border  lg:w-1/2 lg:mt-32 lg:mb-10 bg-textPageColours-${textPageColour} relative z-0 `}
        >
          {loading && <Spinner />}
          <div className="mt-10 mb-5">
            <h3
              style={{ ...textColourIfTextPageColourApplied }}
              className="text-2xl font-semibold tracking-tight scroll-m-20 text-center"
            >
              {title}
            </h3>
          </div>
          <div className="w-11/12">
            {error && <ErrorMessage error={error} />}
            {!user && <NotLogged />}
            <p
              style={{
                fontSize: `${textSize}px`,
                fontFamily: `${fontFamily} , sans-serif`,
                lineHeight: `${lineSpacing}px`,
                letterSpacing: `${letterSpacing}px`,
                ...textColourIfTextPageColourApplied,
              }}
              className="indent-8 whitespace-pre-line pb-10 px-6 mx-auto md:max-w-[80ch] text-left lg:max-w-[90ch]  [&:not(:first-child)]:mt-6 text-foreground  "
            >
              {boldedWords
                ? boldingWords(text, fixation).map((word, index) => (
                    <span key={index}>
                      {pacingTechnique &&
                      index >= highlightIndex &&
                      index < highlightIndex + wordChunking ? (
                        <span style={{ backgroundColor: `${pacerColour}` }}>
                          {word}
                        </span>
                      ) : (
                        <span
                          style={{
                            opacity:
                              index <= highlightIndex ? regressionOpacity : 1,
                          }}
                        >
                          {word}
                        </span>
                      )}
                    </span>
                  ))
                : pacingTechnique
                ? highlightWord(text, highlightIndex, wordChunking)
                : text}
            </p>
          </div>
          {peripheralVision && (
            <PeripheralVisionMargin
              marginSide={leftMargin}
              peripheralOpacity={peripheralOpacity}
              className="absolute top-0 left-0  h-full border-r-2  border-border  bg-background"
            />
          )}
          {peripheralVision && (
            <PeripheralVisionMargin
              marginSide={rightMargin}
              peripheralOpacity={peripheralOpacity}
              className="absolute top-0 right-0  h-full border-l-2 border-border  bg-background"
            />
          )}
        </section>
      </main>
      {pacingTechnique && (
        <PacingPlayer
          wordsCount={wordsCount}
          setHighlightIndex={setHighlightIndex}
          wordChunking={wordChunking}
        />
      )}
      {textToSpeech && <TextToSpeechPlayer audioFile={audioFile} />}
    </>
  );
}

export default ReadifyApp;
