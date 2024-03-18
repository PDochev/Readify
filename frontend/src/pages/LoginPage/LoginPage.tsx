import login_img from "../../assets/images/login_img.jpg";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  const handleGoogleLogin = () => {
    // const googleURL = "https://readify-xbps.onrender.com0/login/google";
    const googleURL = "https://readify-xbps.onrender.com/login/google";
    const newWindow = window.open(googleURL);
    return newWindow;
  };
  return (
    <div role="presentation" className="flex w-full  min-h-svh">
      <section className="hidden w-1/2  lg:flex ">
        <img
          className="w-full h-full object-cover bg-center flex-shrink-0"
          src={login_img}
          alt="Image of a person reading a book."
        />
      </section>
      <section className="lg:w-1/2 flex items-center justify-center mx-auto ">
        <form className="w-72 md:w-96 py-6 mx-auto flex flex-col justify-center items-center border rounded-md ">
          <h3 className="scroll-m-20 text-1xl font-semibold tracking-tight">
            Readify
          </h3>
          <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Welcome Back
          </h2>

          <Button onClick={handleGoogleLogin} className="w-3/4 mt-2">
            <FcGoogle className="mr-2 h-4 w-4" /> Continue with Google
          </Button>

          {/* <p className="text-xs mb-4 mt-4 text-muted-foreground">
            OR CONTINUE WITH
          </p>
          <div className="grid w-3/4 max-w-sm items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
          <Button className="w-3/4 mt-4">Sign in</Button>
          <p className="text-sm leading-7 [&:not(:first-child)]:mt-6">
            Don't have an account ?
            <Link className="text-blue-600 ml-2" to="/register">
              Create account
            </Link>
          </p> */}
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
