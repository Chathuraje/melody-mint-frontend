import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "@/layouts/Footer/Footer";

export const GlobalLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
