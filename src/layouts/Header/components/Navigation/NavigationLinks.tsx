import { routes } from "@/pages/Routes";
import { Link } from "react-router-dom";

export const NavigationLinks = () => {
  return (
    <>
      {routes.map(
        (route) =>
          route.children &&
          route.children.map(
            (childRoute) =>
              childRoute.main && (
                <Link
                  key={childRoute.path}
                  to={childRoute.path}
                  className="menu-items"
                >
                  {childRoute.title}
                </Link>
              )
          )
      )}
    </>
  );
};
