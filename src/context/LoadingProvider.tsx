import { createContext, useState } from "react";

export interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

interface LoadingProviderPrams {
  children: React.ReactNode;
}

export const LoadingProvider = (params: LoadingProviderPrams) => {
  const { children } = params;

  const [isLoading, setIsLoading] = useState(true);

  const contextValue: LoadingContextType = {
    isLoading: isLoading,
    setIsLoading: setIsLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};
