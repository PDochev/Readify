import { useState, useEffect } from "react";

export function useDocumentsFetch(query) {
  // const [document, setDocument] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    async function fetchDocuments() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(query);

        if (!res.ok) {
          throw new Error("Something went wrong with fetching docments");
        }
        const data = await res.json();
        if (data.Response === "False") throw new Error("Document not found");
        setDocument(data.data);
        setDataLength(data.data.length);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Something went wrong , failed to load Documents.");
      } finally {
        setLoading(false);
      }
    }
    fetchDocuments();
  }, [query]);

  return { document, loading, error, dataLength };
}
