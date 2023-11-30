import axios from "axios";
import {NewUser} from "../../types/NewUser";
import {LoginData} from "../../types/LoginData";
import StorageUtil from "../utils/StorageUtil";
import {NewCollection} from "../../types/NewCollection";
import {NewPicture} from "../../types/NewPicture";
import {formatName} from "metro/src/shared/output/bundle";

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

export const createCollection = async (
  userId: number,
  collection: NewCollection,
  collectionPreview: Blob,
  pictures: NewPicture[]
) => {
  const formData = new FormData();
  const now = new Date()
  formData.append('name', collection.name);
  formData.append('price', collection.name);
  formData.append('tags', collection.tags);
  formData.append('upload_date', now.getDate() + '.' + (now.getMonth() + 1) + '.' + now.getFullYear());
  formData.append('preview', collectionPreview, 'preview' + Date.now() + '.' + collectionPreview.type.split('/')[1]);

  pictures.forEach((picture, index) => {
    formData.append(`pictures[${index}][picture_name]`, picture.picture_name);
    formData.append(`pictures[${index}][image]`, picture.image);
  });

  try {
    const response = await axios.post(`http://localhost:3001/user/${userId}/collection/add`, formData);
    console.log(response)
  } catch (message) {
    console.error(`An error occurred while creating collection with label: ${collection.name}`, message)
  }
};