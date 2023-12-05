import axios from './axios';
import {NewUser} from "../../types/NewUser";
import {LoginData} from "../../types/LoginData";
import StorageUtil from "../utils/StorageUtil";
import {NewCollection} from "../../types/NewCollection";
import {NewPainting} from "../../types/NewPainting";
import {Collection} from "../../types/Collection";


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
  paintings: NewPainting[]
) => {
  const formData = new FormData();
  const now = new Date()
  const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()
  const month = now.getMonth() < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1
  const year = now.getFullYear()

  formData.append('name', collection.name);
  formData.append('price', collection.price);
  formData.append('tags', collection.tags);
  formData.append('upload_date', day + '.' + month + '.' + year);
  formData.append('preview', collectionPreview, 'preview' + Date.now() + '.' + collectionPreview.type.split('/')[1]);

  paintings.forEach((painting, index) => {
    formData.append(`paintings[${index}][name]`, painting.name);
    formData.append(`paintings[${index}][image]`,
      painting.image,
      `paintings[${index}][name]` + Date.now() + '.' + painting.image.type.split('/')[1]);
  });

  try {
    const response = await axios.post(`http://localhost:3001/user/collection/${userId}/add`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    console.log(response)
  } catch (message) {
    console.error(`An error occurred while creating collection with label: ${collection.name}`, message)
  }
};

export const getUserCollections = async (userId: number): Promise<Collection[]> => {
  return axios.get('http://localhost:3001/user/collection/${userId}/getAll', {
    headers: {
      'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
    }
  }).then(response => {
    return response.data;
  }).catch(message => {
    console.error(`An error occurred while receiving collections with authorId: ${userId}`, message);
    return null
  });
};

export const getCollection = async (collectionId: number) => {
  try {
    const response = await axios.get(`http://localhost:3001/user/collection/${collectionId}/get`, {
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    return response.data
  } catch (message) {
    console.error(`An error occurred while receiving collection Id: ${collectionId}`, message)
  }
};

export const editUser = async (userData) => {
  try {
    const response = await axios.post(`http://localhost:3001/user/update`, userData,{
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    return response.data.accessToken
  } catch (message) {
    console.error(`An error occurred while updating user`, message)
  }
};

export const deleteUser = async (username: string) => {
  try {
    const response = await axios.post(`http://localhost:3001/user/delete`, { username: username },{
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    console.log(response.status)
  } catch (message) {
    console.error(`An error occurred while deleting user with username: ${username}`, message)
  }
};