import { Link } from "react-router-dom";
// // Logo
import LOGO from "./Header_Components/Logo";

export default function Header() {
  return (
    <div className="flex items-center justify-around my-6">
      <nav className="">
        <Link to="/">
          <LOGO />
        </Link>
      </nav>
      <div></div>
    </div>
  );
}
