import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { HiDotsVertical } from "react-icons/hi";
import { FaHouse } from "react-icons/fa6";

function ReadifyApp() {
  const { id } = useParams();

  return (
    <>
      <nav>
        <Navbar>
          <div className="w-full m-2 flex items-center justify-between">
            <h4 className="ml-6 scroll-m-20 text-xl font-semibold tracking-tight ">
              <Link to="/documents">Readify</Link>
            </h4>

            <div className="flex items-center gap-4 mr-4">
              <HiDotsVertical />
            </div>
          </div>
        </Navbar>
      </nav>
      <main>
        <h1>Document + {id}</h1>
      </main>
    </>
  );
}

export default ReadifyApp;
