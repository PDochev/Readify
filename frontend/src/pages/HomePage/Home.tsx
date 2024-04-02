import { Link } from "react-router-dom";
import home_img from "../../assets/images/blue_book.png";
import { Button } from "@/components/ui/button";
import { useAuthorization } from "@/context/AuthContext";

const Home = () => {
  const authorization = useAuthorization();
  const user = authorization?.user;

  return (
    <>
      <div className="backgroundDots">
        <header className="w-full flex flex-col justify-center items-center  mx-auto md:w-2/4 lg:w-2/4">
          <img
            className="w-36 md:w-56 lg:w-72 grayscale hover:grayscale-0 mt-10"
            src={home_img}
            alt="Image a book."
          />
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Readify
          </h2>
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-center px-2  mt-6 lg:text-mt-8">
            Unlock your speed reading.
          </h1>
          <Link to={user ? "/documents" : "/login"}>
            <Button className="mt-6">Continue to application</Button>
          </Link>
        </header>
        <section className="w-full flex flex-col justify-center items-center mt-20   ">
          <iframe
            id="player"
            allowFullScreen
            className="w-full md:w-5/6 lg:w-1/2 h-96 md:h-96 lg:h-[450px] rounded-lg mb-20"
            title="This writing app has an AI *editor* built-in"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/NNgePe6UqAk"
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default Home;
