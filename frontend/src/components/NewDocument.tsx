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

function NewDocument() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+ New Document</Button>
      </DialogTrigger>
      <DialogContent className="w-64 md:w-96 lg:w-96 rounded-sm ">
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
            <Input type="text" id="name" className="col-span-3" />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="text" className="">
              Text
            </Label>
            <Textarea id="text" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewDocument;

//sm:max-w-[425px]
