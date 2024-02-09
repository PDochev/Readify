import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function NewDocument() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [formError, setFormError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
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
      .post("http://localhost:3000/documents", data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        navigate(`/documents/${res.data._id}`);
      })
      .catch((err) => {
        setLoading(false);
        setFormError("Something went wrong");
        console.log(err);
      });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+ New Document</Button>
      </DialogTrigger>
      <DialogContent className="w-64 md:w-96 lg:w-96 rounded-sm ">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Insert Text</DialogTitle>
            <DialogDescription>
              You can insert the Title and the Text of your document here.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-4">
              <Label htmlFor="name" className="">
                Title
              </Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="name"
                className="col-span-3"
              />
            </div>
            <div className="grid w-full items-center gap-4">
              <Label htmlFor="text" className="">
                Text
              </Label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="text"
              />
            </div>
          </div>
          {formError && <p>{formError}</p>}
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NewDocument;
