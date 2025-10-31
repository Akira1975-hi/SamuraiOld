import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'a35de945-301b-49da-b5ad-069b1c3a7ce1' },
  timeout: 15000,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
export const followAPI = {
  setFollow(userId) {
    return instance.post(`follow/${userId}`, {}).then((response) => {
      return response.data.resultCode;
    });
  },
  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data.resultCode;
    });
  },
};
