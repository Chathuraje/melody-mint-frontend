import { createContext, useState } from "react";

interface PopupContextType {
  popupState: boolean;
  setPopupState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopupContext = createContext<PopupContextType | undefined>(
  undefined
);

interface PopupProviderProp {
  children: React.ReactNode;
}

export const PopupProvider = (props: PopupProviderProp) => {
  const [popupState, setPopupState] = useState(false);

  return (
    <PopupContext.Provider value={{ popupState, setPopupState }}>
      {props.children}
    </PopupContext.Provider>
  );
};
