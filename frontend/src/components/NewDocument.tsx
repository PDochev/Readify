import { useToast } from "@/components/ui/use-toast";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import NewTextDocumentDialog from "./NewTextDocumentDialog";

function NewDocument() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [formError, setFormError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const resetNewFormState = () => {
    setTitle("");
    setText("");
    setFormError(null);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      title,
      text,
    };

    if (!title || !text) {
      setFormError("Please fill out all fields");
      return;
    }

    setLoading(true);
    axios
      .post("http://localhost:3000/documents", data, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        navigate(`/documents/${res.data._id}`);
        toast({
          title: "Your document has been added to the library.",
        });
      })
      .catch((err) => {
        setLoading(false);
        setFormError(
          "Something went wrong with adding your document. Please try again."
        );
        console.log(err);
      });
  }

  return (
    <NewTextDocumentDialog
      title={title}
      setTitle={setTitle}
      handleSubmit={handleSubmit}
      text={text}
      setText={setText}
      formError={formError}
      loading={loading}
      resetNewFormState={resetNewFormState}
    />
  );
}

export default NewDocument;
