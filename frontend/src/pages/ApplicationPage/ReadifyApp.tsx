import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
import TextPageColour from "@/components/TextPageColour";
import { boldingWords } from "@/utils/utils";

function ReadifyApp() {
  const { id } = useParams();
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [textSize, setTextSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Inter");
  const [lineSpacing, setLineSpacing] = useState(24);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textPageColour, setTextPageColour] = useState("pageColourDefault");
  const [boldedWords, setBoldedWords] = useState(false);

  const title = document.title;
  const text = document.text || "";

  const wordsCount: number = text.split(" ").length;
  const charactersCount: number = text.trim().length;

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

  return (
    <>
      <header>
        <nav role="navigation" className="fixed top-0 left-0 w-full bg-white ">
          <Navbar>
            <div className="flex items-center justify-between w-full m-2">
              <h4 className="ml-6 text-xl font-semibold tracking-tight scroll-m-20 ">
                <Link to="/documents">Readify</Link>
              </h4>

              <div className="flex items-center gap-4 mr-4">
                <TextPageColour
                  textPageColour={textPageColour}
                  setTextPageColour={setTextPageColour}
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
                  setBoldedWords={setBoldedWords}
                  boldedWords={boldedWords}
                />
              </div>
            </div>
          </Navbar>
        </nav>
      </header>
      <main>
        <section
          className={` mx-auto mt-10  rounded-sm shadow-sm h-fit flex flex-col  items-center  overflow-x-hidden  border lg:w-1/2 lg:mt-32 lg:mb-10 bg-textPageColours-${textPageColour}`}
        >
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
              {boldedWords ? boldingWords(text) : text}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default ReadifyApp;

//paragraph - lg:px-0
//paragraph - text-justify
