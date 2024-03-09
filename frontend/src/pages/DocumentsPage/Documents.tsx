import Library from "@/components/Library";
import Navbar from "@/components/Navbar";
import NewDocument from "@/components/NewDocument";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { User } from "lucide-react";
import { useAuthorization } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";

function Documents() {
  // const { isAuthenticated, user, login, logout } = useAuthorization();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user", { withCredentials: true })
      .then((response) => setUser(response.data))
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
                <ModeToggle />
                {/* <User /> */}
                {user && (
                  <div className="flex items-center gap-2">
                    <small className="text-sm font-medium leading-none">
                      {user.email}
                    </small>
                    <Avatar>
                      <AvatarImage src={user.picture} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Button onClick={handleLogout}>Logout</Button>
                  </div>
                )}
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
