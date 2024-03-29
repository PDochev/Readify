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
import Spinner from "./Spinner";

interface NewTextDocumentDialogProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  setTitle: (title: string) => void;
  text: string;
  setText: (text: string) => void;
  formError: string | null;
  loading: boolean;
  resetNewFormState: () => void;
}

function NewTextDocumentDialog({
  handleSubmit,
  title,
  setTitle,
  text,
  setText,
  formError,
  loading,
  resetNewFormState,
}: NewTextDocumentDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={resetNewFormState} variant="outline">
          + New Document
        </Button>
      </DialogTrigger>
      <DialogContent className="w-64 md:w-96 lg:w-96 rounded-sm ">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Insert Text</DialogTitle>
            <DialogDescription>
              You can insert the Title and the Text of your document here.
            </DialogDescription>
          </DialogHeader>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <div role="presentation" className="grid gap-4 py-4">
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
              {formError && <p className="text-red-400">{formError}</p>}
            </>
          )}

          <DialogFooter>
            <Button className="" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NewTextDocumentDialog;
