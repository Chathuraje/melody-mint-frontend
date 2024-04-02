import { createContext, useState } from "react";

interface AnalystContextType {
  popupState: boolean;
  setPopupState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnalystContext = createContext<AnalystContextType | undefined>(
  undefined
);

interface AnalystProviderProp {
  children: React.ReactNode;
}

export const AnalystProvider = (props: AnalystProviderProp) => {
  const [popupState, setPopupState] = useState(false);

  return (
    <AnalystContext.Provider value={{ popupState, setPopupState }}>
      {props.children}
    </AnalystContext.Provider>
  );
};
