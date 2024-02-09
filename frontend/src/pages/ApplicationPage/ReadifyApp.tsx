import { useParams } from "react-router-dom";

function ReadifyApp() {
  const { id } = useParams();

  // Now you can use the document data in your component

  return (
    <div>
      <h1>DOCUMENT + {id}</h1>
    </div>
  );
}

export default ReadifyApp;
