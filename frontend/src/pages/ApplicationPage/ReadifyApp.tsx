import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";

import { useState, useEffect } from "react";
import SideMenu from "@/components/SideMenu";

function ReadifyApp() {
  const { id } = useParams();
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [textSize, setTextSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Inter");
  const [lineSpacing, setLineSpacing] = useState(24);
  const [letterSpacing, setLetterSpacing] = useState(0);

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
      <nav className=" w-full  bg-white fixed top-0 left-0 ">
        <Navbar>
          <div className="w-full m-2 flex items-center justify-between">
            <h4 className="ml-6 scroll-m-20 text-xl font-semibold tracking-tight ">
              <Link to="/documents">Readify</Link>
            </h4>

            <div className="flex items-center gap-4 mr-4">
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
      <main>
        <section className="w-full mx-auto mt-8  rounded-sm shadow-sm h-fit flex flex-col  items-center  border lg:w-1/2 lg:mt-32 lg:mb-10 ">
          <div className="mt-10 mb-5">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {title}
            </h3>
          </div>
          <div>
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
              className="pb-10 px-6 mx-auto md:max-w-[70ch]  lg:max-w-[75ch]  [&:not(:first-child)]:mt-6"
            >
              {text}
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
