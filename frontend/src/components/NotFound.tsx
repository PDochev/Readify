import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Readify
      </h2>
      <h2 className="scroll-m-20 text-[80px] font-extrabold tracking-tight  text-center">
        404 - Not Found!
      </h2>

      <Link to="/">
        <Button>Go Home </Button>
      </Link>
    </main>
  );
}

export default NotFound;
