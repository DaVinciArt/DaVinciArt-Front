import React, { useContext } from "react";
import { AuthenticationContext } from "../types";
import { User } from "../../../../types/User";

const authenticationContext = React.createContext<AuthenticationContext>({
  update: () => new Promise(() => {}),
  user: {} as User,
});

export const useAuthenticationContext = () => useContext(authenticationContext);