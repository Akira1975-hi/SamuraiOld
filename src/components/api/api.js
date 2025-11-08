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
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object');
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status) {
    return instance.put('profile/status/', { status });
  },
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`);
  },
};
// export const followAPI = {};
