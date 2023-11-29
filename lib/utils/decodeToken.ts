import jwt from 'jsonwebtoken';
import {JwtPayload} from "jsonwebtoken";

export const decodeToken = (accessToken: string) : JwtPayload=> {
  const decodedUser = jwt.decode(accessToken)
  if (typeof decodedUser !== 'string') {
    return <JwtPayload>jwt.decode(accessToken)
  }
}
