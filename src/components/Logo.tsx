import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

interface LogoProps {
  width: number;
}

export const Logo = (props: LogoProps) => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" width={props.width} />
    </Link>
  );
};
