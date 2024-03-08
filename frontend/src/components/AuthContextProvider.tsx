import React, { ReactNode } from "react";

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  return <>{children}</>;
};

export default AuthContextProvider;
