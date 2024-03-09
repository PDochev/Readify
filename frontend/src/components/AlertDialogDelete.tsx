import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface AlertDialogDeleteProps {
  handleDelete: (id: string) => void;
  id: string;
}

function AlertDialogDelete({ handleDelete, id }: AlertDialogDeleteProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive" className=" h-6 ml-2">
          <Trash2 className=" h-3 w-3" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-3/4 rounded">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            document from the database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDelete(id)}
            className="bg-red-500 hover:bg-red-700 text-foreground"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertDialogDelete;
