import { User } from "../../../../types/User";

export interface AuthenticationContext {
  user: User;
  update: () => Promise<void>;
}

export interface UseAuthenticationReturn extends AuthenticationContext {
  isLoggedIn: boolean;
}