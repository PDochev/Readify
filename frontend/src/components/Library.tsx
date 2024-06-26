import Document from "./Document";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import DocumentsTable from "./DocumentsTable";
import { useAuthorization } from "@/context/AuthContext";

interface Document {
  _id: string;
  title: string;
  text: string;
  createdAt: string;
}

function Library() {
  const { toast } = useToast();
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataLength, setDataLength] = useState(0);
  const authorization = useAuthorization();
  const user = authorization?.user;

  const handleDelete = (id: string) => {
    axios
      .delete(`https://readifyapp-backend.onrender.com/documents/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        setLoading(false);
        setDocument(document.filter((doc: Document) => doc._id !== id));
        toast({
          variant: "destructive",
          title: "Your document has been deleted.",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    async function fetchDocuments() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          "https://readifyapp-backend.onrender.com/documents",
          {
            credentials: "include",
          }
        );

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
  }, [user]);

  return (
    <div role="presentation">
      <div className="border-b">
        <h2 className="scroll-m-20 pb-2 pt-2 text-3xl font-semibold tracking-tight first:mt-0">
          My Library
        </h2>
      </div>

      <section>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Document errorMessage={error} dataLength={dataLength}>
              <DocumentsTable document={document} handleDelete={handleDelete} />
            </Document>
          </>
        )}
      </section>
    </div>
  );
}

export default Library;
