'use client'

import axios from 'axios';
import router from 'next/router';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 403) {
      if (typeof window !== 'undefined') {
        router.push('/login');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;