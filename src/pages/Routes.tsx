import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import App from "@/App";
import { MarketplaceItemNft } from "./MarketplaceItemNft/MarketplaceItemNft";
import { Analyst } from "./Analyst/Analyst";
import { AnalystItem } from "./AnalystItem/AnalystItem";
import {
  AllFundraisers,
  Create,
  SingleFundraisersItem,
  UpdateFundraisers,
} from "./Fundraisers";
import {
  AllMarketplace,
  ListForSale,
  // MakeOffer,
  MarketplaceItem,
} from "./Marketplace";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Login } from "./Login/Login";
import { UserUpdate, UserView } from "./User/User";
import { AddNewAnalyst } from "./Analyst/AddNewAnalyst";

export interface RoutesInterface {
  path: string;
  element?: JSX.Element | string;
  title?: string;
  menu?: string[];
  children?: RoutesInterface[];
}

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        title: "Home",
        menu: ["header", "footer1"],
      },
      {
        path: "/login",
        element: <Login />,
        title: "Login",
      },
      {
        path: "/fundraisers",
        children: [
          {
            path: "/fundraisers/",
            element: <AllFundraisers />,
            title: "Fundraisers",
            menu: ["header", "footer1"],
          },
          {
            path: "/fundraisers/create",
            element: (
              <ProtectedRoutes>
                <Create />
              </ProtectedRoutes>
            ),
            title: "Create a Fundraisers",
          },
          {
            path: "/fundraisers/:FundraisersId",
            element: <SingleFundraisersItem />,
            title: "Single Fundraiser",
          },
          {
            path: "/fundraisers/:FundraisersId/update",
            element: (
              <ProtectedRoutes>
                <UpdateFundraisers />
              </ProtectedRoutes>
            ),
            title: "Single Fundraiser",
          },
        ],
      },
      {
        path: "/marketplace/",
        children: [
          {
            path: "/marketplace/",
            element: <AllMarketplace />,
            title: "Marketplace",
            menu: ["header", "footer1"],
          },
          {
            path: "/marketplace/:collectionId/",
            children: [
              {
                path: "/marketplace/:collectionId/",
                element: <MarketplaceItem />,
                title: "Single Collection",
              },
              {
                path: "/marketplace/:collectionId/:tokenId/",
                children: [
                  {
                    path: "/marketplace/:collectionId/:tokenId/",
                    element: <MarketplaceItemNft />,
                    title: "Single NFTs",
                  },
                  {
                    path: "/marketplace/:collectionId/:tokenId/list-for-sale",
                    element: (
                      <ProtectedRoutes>
                        <ListForSale />
                      </ProtectedRoutes>
                    ),
                    title: "List for Sale",
                  },
                  // {
                  //   path: "/marketplace/:collectionId/:tokenId/make-offer",
                  //   element: (
                  //     <ProtectedRoutes>
                  //       <MakeOffer />
                  //     </ProtectedRoutes>
                  //   ),
                  //   title: "Make Offer",
                  // },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/analyst",
        children: [
          {
            path: "/analyst/add-new",
            element: (
              <ProtectedRoutes>
                <AddNewAnalyst />
              </ProtectedRoutes>
            ),
            title: "Add New Analyst",
          },
          {
            path: "/analyst",
            element: (
              <ProtectedRoutes>
                <Analyst />
              </ProtectedRoutes>
            ),
            title: "Analyst",
            menu: ["header", "footer1"],
          },
          {
            path: "/analyst/:AnalystId",
            element: (
              <ProtectedRoutes>
                <AnalystItem />
              </ProtectedRoutes>
            ),
            title: "Single Analyst Item",
          },
        ],
      },
      // {
      //   path: "/about",
      //   element: <div>about</div>,
      //   title: "About",
      //   menu: ["header", "footer1"],
      // },
      {
        path: "/user",
        children: [
          {
            path: "/user/:Userid",
            element: <UserView />,
            title: "User Profile",
          },
          {
            path: "/user/:Userid/update",
            children: [
              {
                path: "/user/:Userid/update",
                element: (
                  <ProtectedRoutes>
                    <UserUpdate />
                  </ProtectedRoutes>
                ),
                title: "Update User Profile",
              },
              {
                path: "/user/:Userid/update/:activeTab",
                element: (
                  <ProtectedRoutes>
                    <UserUpdate />
                  </ProtectedRoutes>
                ),
                title: "Update User Profile",
              },
            ],
          },
        ],
      },
      {
        path: "/privacy-policy",
        element: "Privacy Policy",
        title: "Privacy Policy",
        menu: ["footer2"],
      },
      {
        path: "terms-of-service",
        element: "Terms of Service",
        title: "Terms of Service",
        menu: ["footer2"],
      },
      {
        path: "associated-risks",
        element: "Associated Risks",
        title: "Associated Risks",
        menu: ["footer2"],
      },
      {
        path: "help-center",
        element: "Help Center",
        title: "Help Center",
        menu: ["footer3"],
      },
      {
        path: "support",
        element: "Support",
        title: "Support",
        menu: ["footer3"],
      },
      {
        path: "/404",
        element: "404 Page",
        title: "404 Page",
      },
      {
        path: "/*",
        element: "404 Page",
        title: "404 Page",
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
