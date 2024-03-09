import Library from "@/components/Library";
import Navbar from "@/components/Navbar";
import NewDocument from "@/components/NewDocument";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import UserMenu from "@/components/UserMenu";
import { Button } from "@/components/ui/button";

function Documents() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user", { withCredentials: true })
      .then((response) => {
        setUser(response.data);
        // toast({ title: `Welcome back ${response.data.fullName}!` });
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:3000/logout", { withCredentials: true })
      .then(() => {
        setUser(null); // Clear user data
        navigate("/");
      })
      .catch((error) => console.error("Error:", error));
  };
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
                {/* <ModeToggle /> */}
                {user && <UserMenu user={user} logout={handleLogout} />}
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
