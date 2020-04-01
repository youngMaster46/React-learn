import { ProfileType, PhotosType } from './../../types/types';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "6b9a45f9-791d-4772-bc1f-c5dba8f157ad",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
type GetUsersResponseType = {
    items: {
        id: number
        name: string
        status: string
        photos: PhotosType
        followed: boolean
    }
    totalCount: number
    error: string
}
type DeleteUsersResponseType = {
    data: {}
    resultCode: number
    messages: Array<string>
}
type FollowUsersResponseType = {
    data: {}
    resultCode: number
    messages: Array<string>
}
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    deleteUsers(id: number) {
        return instance.delete<DeleteUsersResponseType>(`follow/${id}`).then(response => response.data);
    },
    followUsers(id: number) {
        return instance.post<FollowUsersResponseType>(`follow/${id}`).then(response => response.data);
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Use profileAPI object');
        return profileAPI.getProfile(userId);
    }
}
type GetProfileResponseType = ProfileType
type GetStatusResponseType = {/*any type*/ }
type UpdateStatusResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type SavePhotoResponseType = PhotosType
type SaveProfileResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<GetProfileResponseType>(`profile/` + userId).then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get<GetStatusResponseType>(`profile/status/` + userId).then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusResponseType>(`profile/status`, { status: status }).then(response => response.data)
    },
    savePhoto(photoFile: string) {
        var formData = new FormData();
        formData.append('image', photoFile);
        return instance.put<SavePhotoResponseType>(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    },
    saveProfile(profile: ProfileType) {
        return instance.put<SaveProfileResponseType>(`profile`, profile);
    }
}
type AuthResponseType = {
    data: { id: number, email: string, login: string }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: { userId: number }
    resultCode: ResultCodeForCaptcha | ResultCodesEnum
    messages: Array<string>
}
type LogoutResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export const authAPI = {
    auth() {
        return instance.get<AuthResponseType>(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha });
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`);
    }
}
//instance.get('auth/me').then((res:AxiosResponse<string>) => res.data)
// instance.get<AxiosResponse<string>>('auth/me').then(res => res.data)
type GetCaptchaUrlResponseType = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`);
    }
}