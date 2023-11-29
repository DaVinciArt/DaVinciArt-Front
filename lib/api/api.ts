import axios from "axios";
import {NewUser} from "../../types/NewUser";
import {LoginData} from "../../types/LoginData";
import StorageUtil from "../utils/StorageUtil";
import {decodeToken} from "../utils/decodeToken";

export const registerUser = async (user: NewUser) => {
  try {
    const response = await axios.post(`http://localhost:3001/auth/register`, user);
    StorageUtil.setAccessToken(response.data.accessToken)
  } catch (message) {
    console.error(`An error occurred while registration user: ${user.username}`, message)
  }
};

export const loginUser = async (loginData: LoginData) => {
  try {
    const response = await axios.post(`http://localhost:3001/auth/login`, loginData);
    StorageUtil.setAccessToken(response.data.accessToken)
  } catch (message) {
    console.error(`An error occurred while login user with username: ${loginData.username}`, message)
  }
};