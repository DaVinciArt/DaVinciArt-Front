import axios from "axios";
import {NewUser} from "../../types/NewUser";
import {LoginData} from "../../types/LoginData";

export const registerUser = async (user: NewUser) => {
  try {
    const response = await axios.post(`${process.env.API_DEV_ADRESS}/auth/register`, user);
    return response.data;
  } catch (message) {
    console.error(`An error occurred while registration user: ${user.username}`, message)
  }
};

export const loginUser = async (loginData: LoginData) => {
  try {
    const response = await axios.post(`${process.env.API_DEV_ADRESS}/auth/login`, loginData);
    return response.data;
  } catch (message) {
    console.error(`An error occurred while login user with username: ${loginData.username}`, message)
  }
};