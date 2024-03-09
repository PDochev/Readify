import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function NotLogged() {
  return (
    <div>
      <Link to="/login">
        <Button className="mt-4 w-24">Login</Button>
      </Link>
    </div>
  );
}

export default NotLogged;
