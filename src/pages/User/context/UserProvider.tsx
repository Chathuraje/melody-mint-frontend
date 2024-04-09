import { useUserAPI } from "@/hooks/API/useUserAPI";
import { UserModel } from "@/models/user";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface UserContextType {
  userData: UserModel | null;
  setUserData: React.Dispatch<React.SetStateAction<UserModel | null>>;
  populateSocialIcons: (user: UserModel) => {
    names: string[];
    hrefs: { [key: string]: string };
  };
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderPrams {
  children: React.ReactNode;
}

interface SocialMediaLinks {
  [key: string]: string;
}

export const UserProvider = (params: UserProviderPrams) => {
  const { children } = params;
  const [userData, setUserData] = useState<UserModel | null>(null);
  const { Userid } = useParams();
  const navigate = useNavigate();

  const { GetUserAPI } = useUserAPI();

  useEffect(() => {
    const FetchUserData = async () => {
      if (Userid !== undefined) {
        const data = await GetUserAPI({ id: Userid });
        if (data) {
          setUserData(data);
        } else {
          navigate("/404");
        }
      }
    };

    FetchUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Userid]);

  const populateSocialIcons = (user: UserModel) => {
    const names: string[] = [];
    const hrefs: SocialMediaLinks = {};

    if (user.social_media) {
      for (const [key, value] of Object.entries(user.social_media)) {
        if (value) {
          names.push(key);
          hrefs[key] = value;
        }
      }
    }

    if (user.website) {
      names.push("website");
      hrefs["website"] = user.website;
    }

    return { names, hrefs };
  };

  const contextValue: UserContextType = {
    userData: userData,
    setUserData: setUserData,
    populateSocialIcons: populateSocialIcons,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
