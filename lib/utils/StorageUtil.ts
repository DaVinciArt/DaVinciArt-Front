import {STORAGE_KEYS} from "../../types/utils/storage";

class StorageUtil {
  setAccessToken(accessToken: string) {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
  }
  getAccessToken() {
    if (typeof window === 'undefined') {
      return null;
    }

    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    return  accessToken ? accessToken : null
  }

  removeAccessToken() {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  }
}

export default new StorageUtil();