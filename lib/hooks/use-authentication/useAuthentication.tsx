import {ReactNode, createContext, useEffect, useState } from "react";
import StorageUtil from "../../utils/StorageUtil";
import {decodeToken} from "../../utils/decodeToken";
import {AuthenticationContext} from "./types";
import {useRouter} from "next/navigation";

export const UserContext = createContext<AuthenticationContext | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null);
  const router = useRouter()

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
    console.log(user)
  };

  const update = (token: string) => {
    StorageUtil.removeAccessToken()
    setUser(null);
    login(token)
  };

  const logout = () => {
    StorageUtil.removeAccessToken()
    setUser(null);
    router.push('/login')
  };

  return (
    <UserContext.Provider value={{ user, login, logout, update }}>
      {children}
    </UserContext.Provider>
  );
};