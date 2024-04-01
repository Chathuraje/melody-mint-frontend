import { routes } from "@/pages/Routes";
import { Link } from "react-router-dom";

interface NavigatrionsProps {
  type: "main" | "footer" | "footer2";
}

export const Navigation = (props: NavigatrionsProps) => {
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
              >
                {childRoute.title}
              </Link>
            )
        )
      )}
    </>
  );
};
