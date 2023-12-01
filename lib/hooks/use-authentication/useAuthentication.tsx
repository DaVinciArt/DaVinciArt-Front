import {ReactNode, createContext, useContext, useEffect, useState } from "react";
import StorageUtil from "../../utils/StorageUtil";
import {decodeToken} from "../../utils/decodeToken";
import {AuthenticationContext} from "./types";
import {User} from "../../../types/User";

export const UserContext = createContext<AuthenticationContext | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const token = StorageUtil.getAccessToken();
    if (token) {
      const user = decodeToken(token);
      setUser(user);
    }
  }, []);

  const login = (token: string) => {
    StorageUtil.setAccessToken(token)
    const user = decodeToken(token);
    setUser(user);
  };

  const update = (token: string) => {
    logout()
    login(token)
  };

  const logout = () => {
    StorageUtil.removeAccessToken()
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};