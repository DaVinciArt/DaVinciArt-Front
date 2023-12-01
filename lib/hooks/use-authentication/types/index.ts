import { User } from "../../../../types/User";

export interface AuthenticationContext {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

// export interface UseAuthenticationReturn extends AuthenticationContext {
//   isLoggedIn: boolean;
// }