import { useProfileAPI } from "@/hooks/API/useProfileAPI";
import { UserModel } from "@/models/Users";
import { createContext, useEffect, useState } from "react";

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

  const { GetProfileAPI } = useProfileAPI();

  useEffect(() => {
    const controller = new AbortController();
    const getUserData = async () => {
      const data = await GetProfileAPI(controller.signal);
      setUserData(data);
    };

    getUserData();

    return () => {
      console.log("User data cleanup");
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
