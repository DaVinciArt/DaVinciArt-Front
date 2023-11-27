import axios from "axios";
import {NewUser} from "../../types/NewUser";

export const registerUser = async (user: NewUser) => {
  try {
    const response = await axios.post(`${process.env.API_DEV_ADRESS}/auth/register`, user);
    return response.data;
  } catch (message) {
    console.error(`An error occurred while registration user: ${user.username}`, message)
  }
}