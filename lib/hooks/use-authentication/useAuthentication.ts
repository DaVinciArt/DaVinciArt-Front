import { useAuthenticationContext } from "./authentication-context/AuthenticationContext";
import { UseAuthenticationReturn } from "./types";

const useAuthentication = (): UseAuthenticationReturn => {
  const { user, update } = useAuthenticationContext();

  const isLoggedIn = !!user;

  return {
    user,
    isLoggedIn,
    update,
  };
};

export default useAuthentication;