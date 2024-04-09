import { RoutesInterface, routes } from "@/pages/Routes";
import { Link } from "react-router-dom";

interface NavigatrionsProps {
  type: "header" | "footer1" | "footer2" | "footer3";
}

export const Navigation = (props: NavigatrionsProps) => {
  const { type } = props;

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const result: RoutesInterface[] = [];

  function getAllRouteItems(routes: RoutesInterface[]) {
    for (const route of routes) {
      if (route.path && route.title && route.menu) {
        result.push(route);
      }
      if (route.children) {
        getAllRouteItems(route.children);
      }
    }
    return result;
  }

  return (
    <>
      {getAllRouteItems(routes).map((route) => {
        if (route.menu?.includes(type)) {
          return (
            <Link
              key={route.path}
              to={route.path}
              onClick={handleClick}
              className={[type].join(" ")}
            >
              {route.title}
            </Link>
          );
        }
        return null;
      })}
    </>
  );
};
