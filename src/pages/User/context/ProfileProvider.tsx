import { UserModel } from "@/models/Users";
import { createContext, useState } from "react";

interface ProfileContextType {
  profileData: UserModel | null;
  setProfileData: React.Dispatch<React.SetStateAction<UserModel | null>>;
  userData: UserModel | null;
  setUserData: React.Dispatch<React.SetStateAction<UserModel | null>>;
  populateSocialIcons: (profile: UserModel) => {
    names: string[];
    hrefs: { [key: string]: string };
  };
}

export const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);

interface ProfileProviderPrams {
  children: React.ReactNode;
}

interface SocialMediaLinks {
  [key: string]: string;
}

export const ProfileProvider = (params: ProfileProviderPrams) => {
  const { children } = params;
  const [profileData, setProfileData] = useState<UserModel | null>(null);
  const [userData, setUserData] = useState<UserModel | null>(null);

  const populateSocialIcons = (profile: UserModel) => {
    const names: string[] = [];
    const hrefs: SocialMediaLinks = {};

    if (profile.social_media) {
      for (const [key, value] of Object.entries(profile.social_media)) {
        if (value) {
          names.push(key);
          hrefs[key] = value;
        }
      }
    }

    return { names, hrefs };
  };

  const contextValue: ProfileContextType = {
    profileData: profileData,
    setProfileData: setProfileData,
    userData: userData,
    setUserData: setUserData,
    populateSocialIcons: populateSocialIcons,
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};
