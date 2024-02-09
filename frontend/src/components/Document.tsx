import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import AlertDialogDelete from "./AlertDialogDelete";

function Document({ document, errorMessage, dataLength, handleDelete }) {
  return (
    <div className="flex flex-col justify-start mt-10 mb-8">
      {dataLength === 0 && (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          Your library is empty
        </h3>
      )}
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <>
          <h3 className="text-md font-medium leading-none mb-8">Documents</h3>

          <div className="relative overflow-hidden rounded-sm">
            <table className="table-fixed w-full text-left">
              <thead className="text-black-200">
                <tr className="bg-secondary">
                  <td className="py-2 border font-medium leading-none text-sm p-4">
                    Name
                  </td>
                  <td className="py-2 border text-sm font-medium leading-none text-end p-4">
                    Date Added
                  </td>
                </tr>
              </thead>
              <tbody className="bg-white text-slate-500">
                {document.map((doc) => (
                  <tr key={doc._id} className="py-4">
                    <td className="py-4 text-sm border text-muted-foreground p-4">
                      <Link to={`/documents/${doc._id}`}>{doc.title}</Link>
                    </td>
                    <td className="py-4 border text-muted-foreground text-xs md:text-sm text-end p-4">
                      {new Date(doc.createdAt).toLocaleDateString()}
                      <AlertDialogDelete
                        handleDelete={handleDelete}
                        id={doc._id}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Document;
