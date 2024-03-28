import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" width={85} />
    </Link>
  );
};
