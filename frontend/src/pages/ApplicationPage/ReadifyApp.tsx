import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { HiDotsVertical } from "react-icons/hi";
import { FaHouse } from "react-icons/fa6";
import { useState, useEffect } from "react";
import SideMenu from "@/components/SideMenu";

function ReadifyApp() {
  const { id } = useParams();
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const title = document.title;
  const text = document.text;

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
              <SideMenu />
            </div>
          </div>
        </Navbar>
      </nav>
      <main>
        {/* <h1>Document + {id}</h1>
        <h2>{title}</h2>
        <p>{text}</p>
         */}

        <section className="w-full mx-auto mt-6 mb-10 rounded-sm shadow-sm h-fit flex flex-col  items-center  border lg:w-1/2 lg:mt-20 ">
          <div className="mt-10 mb-5">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {title}
            </h3>
          </div>
          <div>
            {error && (
              <p className="leading-7 [&:not(:first-child)]:mt-6">{error}</p>
            )}
            <p className=" pb-10 px-6  mx-auto md:max-w-[70ch]  lg:max-w-[75ch] text-justify leading-7 [&:not(:first-child)]:mt-6   ">
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
