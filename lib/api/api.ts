import {NewUser} from "../../types/NewUser";
import {LoginData} from "../../types/LoginData";
import StorageUtil from "../utils/StorageUtil";
import {NewCollection} from "../../types/NewCollection";
import {Collection} from "../../types/Collection";
import axios from "axios";
import { Painting } from "../../types/Painting";
import {User} from "../../types/User";
import { Review } from "../../types/Review";


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
  paintings: Painting[]
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
      painting.image_file,
      `paintings[${index}][name]` + Date.now() + '.' + painting.image_file.type.split('/')[1]);
  });

  try {
    return await axios.post(`http://localhost:3001/user/${userId}/collection/add`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
  } catch (message) {
    console.error(`An error occurred while creating collection with label: ${collection.name}`, message)
  }
};

export const getUserCollections = async (userId: number): Promise<Collection[]> => {
  try {
    const response = await axios.get(`http://localhost:3001/user/${userId}/collection/getAll`, {
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    return response.data
  } catch (message) {
    console.error(`An error occurred while receiving collections with authorId: ${userId}`, message);
  }
};


export const getCollection = async (userId: number, collectionId: number) => {
  try {
    const response = await axios.get(`http://localhost:3001/user/${userId}/collection/${collectionId}/get`, {
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    return response.data
  } catch (message) {
    console.error(`An error occurred while receiving collection Id: ${collectionId}`, message)
  }
};

export const editUser = async (userId: number ,userData: object) => {
  try {
    const response = await axios.put(`http://localhost:3001/user/${userId}/update`, userData,{
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    return response.data.accessToken
  } catch (message) {
    console.error(`An error occurred while updating user`, message)
  }
};

export const deleteUser = async (userId: number) => {
  try {
    const response = await axios.delete(`http://localhost:3001/user/${userId}/delete`, {
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    console.log(response.status)
  } catch (message) {
    console.error(`An error occurred while deleting user with id: ${userId}`, message)
  }
};

export const getTopFive = async (): Promise<Collection[]> => {
  try {
    const response = await axios.get(`http://localhost:3001/collection/getTopFive`);
    return response.data
  } catch (message) {
    console.error(`An error occurred while receiving the most popular collections`, message);
  }
};

export const editCollection = async (
  collection: Collection,
  collectionData: {price: string, tags: string},
  status: boolean
): Promise<Collection> => {
  try {
    const response = await axios.put(`http://localhost:3001/user/${collection.author_id}/collection/${collection.id}/edit`, {
      price: collectionData.price,
      tags: collectionData.tags,
      on_sale: status,
    }, {
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    return response.data.collection
  } catch (message) {
    console.error(`An error occurred while editing collection with id: ${collection.id}`, message);
  }
};

export const getAuthor = async (userId: number): Promise<User> => {
  try {
    const response = await axios.get(`http://localhost:3001/user/${userId}`);
    return response.data
  } catch (message) {
    console.error(`An error occurred while receiving author with id: ${userId}`, message);
  }
};

export const getAllCollections = async (page: number, limit: number): Promise<Collection[]> => {
  try {
    const response = await axios.get(`http://localhost:3001/collection/getPopular?page=${page}&limit=${limit}`);
    return response.data.collections
  } catch (message) {
    console.error(`An error occurred while receiving all collections`, message);
  }
};

export const addReview = async (receiverId: number, comentatorId: number, text: string) => {
  const now = new Date()
  const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()
  const month = now.getMonth() < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1
  const year = now.getFullYear()

  try {
    const response = await axios.post(`http://localhost:3001/reviews/sendReview/${receiverId}`, {
      commentator_id: comentatorId,
      upload_date: day + '.' + month + '.' + year,
      comment_text: text
    }, {
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    console.log(response)
  } catch (message) {
    console.error(`An error occurred while adding review to user with id: ${receiverId}`, message);
  }
};

export const deleteReview = async (reviewId: number) => {
  try {
    const response = await axios.delete(`http://localhost:3001/reviews/${reviewId}/delete`, {
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    return response
  } catch (message) {
    console.error(`An error occurred while deleting review with id: ${reviewId}`, message);
  }
};

export const getAllReview = async (receiverId: number): Promise<Review[]> => {
  try {
    const response = await axios.get(`http://localhost:3001/reviews/${receiverId}/getAll`);
    console.log(response.data.result)
    return response.data.result
  } catch (message) {
    console.error(`An error occurred while receiving all reviews for user with id: ${receiverId}`, message);
  }
};

export const buyCollection = async (collectionId: number, buyerId: number, sellerId: number): Promise<string> => {
  try {
    const response = await axios.post(`http://localhost:3001/payment/${collectionId}/buy`, {
      buyer_id: buyerId,
      seller_id: sellerId,
    }, {
      headers: {
        'Authorization': `Bearer ${StorageUtil.getAccessToken()}`
      }
    });
    return response.data.accessToken
  } catch (message) {
    console.error(`An error occurred while buying collection with id: ${collectionId}`, message);
  }
};

