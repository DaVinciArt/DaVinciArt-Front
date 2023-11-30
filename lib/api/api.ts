import axios from "axios";
import {NewUser} from "../../types/NewUser";
import {LoginData} from "../../types/LoginData";
import StorageUtil from "../utils/StorageUtil";
import {decodeToken} from "../utils/decodeToken";

export const registerUser = async (user: NewUser) => {
  const formData = new FormData();
  formData.append('avatar', user.avatar, 'avatar' + Date.now() + '.' + user.avatar.type.split('/')[1]);
  formData.append('email', user.email);
  formData.append('first_name', user.first_name);
  formData.append('last_name', user.last_name);
  formData.append('password', user.password);
  formData.append('username', user.username);

  try {
    const response = await axios.post(`http://localhost:3001/auth/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
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