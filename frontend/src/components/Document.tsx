import { useNavigate, useParams } from "react-router-dom";

function Document({ document }) {
  return (
    <div className="flex flex-col justify-start mt-10">
      <h3 className="text-md font-medium leading-none mb-8">Documents</h3>

      <div className="relative overflow-hidden  rounded-lg">
        <table className="table-fixed w-full text-left">
          <thead className="text-black-200">
            <tr>
              <td className="py-2 border text-sm p-4">Name</td>
              <td className="py-2 border text-end p-4">Date Added</td>
            </tr>
          </thead>
          <tbody className="bg-white text-slate-500">
            {document.map((doc) => (
              <tr key={doc._id} className="py-4">
                <td className="py-4 text-sm border p-4">{doc.title}</td>
                <td className="py-4 border text-sm text-end p-4">
                  {new Date(doc.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Document;
