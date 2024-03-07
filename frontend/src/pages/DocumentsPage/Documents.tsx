import Library from "@/components/Library";
import Navbar from "@/components/Navbar";
import NewDocument from "@/components/NewDocument";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { User } from "lucide-react";

function Documents() {
  return (
    <>
      <header>
        <nav role="navigation">
          <Navbar>
            <div className="flex items-center justify-between w-full m-2">
              <h4 className="ml-4 text-xl font-semibold tracking-tight scroll-m-20 ">
                Readify
              </h4>

              <div className="flex items-center gap-4 mr-4">
                <ModeToggle />
                <User />
              </div>
            </div>
          </Navbar>
        </nav>
      </header>
      <div className="flex flex-col items-center justify-center w-full mx-auto mt-6 lg:items-end md:items-end lg:w-1/2 md:w-3/4">
        <NewDocument />
      </div>
      <main className="flex flex-col items-center justify-center w-full p-6 mx-auto mt-6 border rounded shadow-sm lg:w-1/2 md:w-3/4">
        <Library />
      </main>
    </>
  );
}

export default Documents;
