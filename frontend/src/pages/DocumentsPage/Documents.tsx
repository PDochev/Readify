import Library from "@/components/Library";
import Navbar from "@/components/Navbar";
import NewDocument from "@/components/NewDocument";
import UserMenu from "@/components/UserMenu";
import { useAuthorization } from "@/context/AuthContext";

function Documents() {
  const authorization = useAuthorization();
  // const {user , logout} = useAuthorization() || {user: null, logout: null}
  const user = authorization?.user;
  const logout = authorization?.logout;

  const handleLogout = () => {
    logout && logout();
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
                {user && <UserMenu user={user} logout={handleLogout} />}
              </div>
            </div>
          </Navbar>
        </nav>
      </header>

      <div className="flex flex-col items-center justify-center w-full  mx-auto mt-6 lg:items-end md:items-end lg:w-1/2 md:w-3/4 ">
        {user ? <NewDocument /> : ""}
      </div>
      <main className="flex flex-col  w-full p-6 mx-auto mt-6 border rounded shadow-sm lg:w-1/2 md:w-3/4 ">
        <Library />
      </main>
    </>
  );
}

export default Documents;
