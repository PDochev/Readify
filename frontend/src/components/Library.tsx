import Document from "./Document";
import { useState, useEffect } from "react";
import axios from "axios";

function Library() {
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDocuments() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("http://localhost:3000/documents");

        if (!res.ok) {
          throw new Error("Something went wrong with fetching docments");
        }
        const data = await res.json();
        if (data.Response === "False") throw new Error("Document not found");
        setDocument(data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Something went wrong , Failed to load Jokes");
      } finally {
        setLoading(false);
      }
    }
    fetchDocuments();
  }, []);

  return (
    <div className="">
      <div className="w-full block  border-b">
        <h2 className="scroll-m-20 pb-2 pt-2 text-3xl font-semibold tracking-tight first:mt-0">
          My Library
        </h2>
      </div>

      <section>
        <Document document={document} />
        {error && <p>{error}</p>}
      </section>
    </div>
  );
}

export default Library;
