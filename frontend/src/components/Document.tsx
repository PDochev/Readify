import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import AlertDialogDelete from "./AlertDialogDelete";
import DocumentsTable from "./DocumentsTable";

function Document({ children, errorMessage, dataLength }) {
  return (
    <div className="flex flex-col justify-start mt-10 mb-8">
      {dataLength === 0 && (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          Your library is empty
        </h3>
      )}
      {errorMessage ? <p>{errorMessage}</p> : <>{children}</>}
    </div>
  );
}

export default Document;
