import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center mt-20 mx-auto md:w-48 lg:w-2/4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Readify
      </h2>
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-center px-2  mt-6 lg:text-mt-8">
        Unlock your speed reading.
      </h1>
      <Link to="/login">
        <Button className="mt-10">Continue to application</Button>
      </Link>
    </header>
  );
};

export default Home;
