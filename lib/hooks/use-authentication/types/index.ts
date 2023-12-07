import { User } from "../../../../types/User";

export interface AuthenticationContext {
  user: User | null;
  update: (token: string) => void;
  login: (token: string) => void;
  logout: () => void;
}

// export interface UseAuthenticationReturn extends AuthenticationContext {
//   isLoggedIn: boolean;
// }