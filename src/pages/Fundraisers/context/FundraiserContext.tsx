import { createContext, useState } from "react";

interface FundraiserContextType {
  popupState: boolean;
  setPopupState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FundraiserContext = createContext<
  FundraiserContextType | undefined
>(undefined);

interface FundraiserProviderProp {
  children: React.ReactNode;
}

export const FundraiserProvider = (props: FundraiserProviderProp) => {
  const [popupState, setPopupState] = useState(false);

  return (
    <FundraiserContext.Provider value={{ popupState, setPopupState }}>
      {props.children}
    </FundraiserContext.Provider>
  );
};
