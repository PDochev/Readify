import Document from "./Document";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
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
        setError("Something went wrong , Failed to load Documents");
      } finally {
        setLoading(false);
      }
    }
    fetchDocuments();
  }, []);

  return (
    <div className="">
      <div className="border-b">
        <h2 className="scroll-m-20 pb-2 pt-2 text-3xl font-semibold tracking-tight first:mt-0">
          My Library
        </h2>
      </div>

      <section>
        {loading ? (
          <Spinner />
        ) : (
          <Document errorMessage={error} document={document} />
        )}

        {/* {error && <p>{error}</p>} */}
      </section>
    </div>
  );
}

export default Library;
