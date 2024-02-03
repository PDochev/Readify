import Library from "@/components/Library";
import Navbar from "@/components/Navbar";
import NewDocument from "@/components/NewDocument";
import { IoMdPerson } from "react-icons/io";

function Documents() {
  return (
    <>
      <nav>
        <Navbar>
          <div className="w-full m-2 flex items-center justify-between">
            <h4 className="ml-6 scroll-m-20 text-xl font-semibold tracking-tight ">
              Readify
            </h4>

            <div className="flex items-center gap-4 mr-4">
              <IoMdPerson />
            </div>
          </div>
        </Navbar>
      </nav>
      <div className="w-full flex flex-col justify-center items-center mt-6  ">
        <NewDocument />
      </div>
      <main className="w-full p-6  rounded flex flex-col justify-center items-center mt-6 border shadow-sm mx-auto lg:w-1/2 md:w-3/4">
        <Library />
      </main>
    </>
  );
}

export default Documents;
