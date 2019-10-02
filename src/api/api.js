import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "6b9a45f9-791d-4772-bc1f-c5dba8f157ad",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    followUsers(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Use profileAPI object');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    },
    savePhoto(photoFile) {
        var formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}