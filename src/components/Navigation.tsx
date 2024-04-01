import { routes } from "@/pages/Routes";
import { Link } from "react-router-dom";

interface NavigatrionsProps {
  type: "main" | "footer" | "footer2" | "footer3";
}

export const Navigation = (props: NavigatrionsProps) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {routes.map((route) =>
        route.children.map(
          (childRoute) =>
            childRoute[props.type] && (
              <Link
                key={childRoute.path}
                to={childRoute.path}
                className={[props.type].join(" ")}
                onClick={handleClick}
              >
                {childRoute.title}
              </Link>
            )
        )
      )}
    </>
  );
};
