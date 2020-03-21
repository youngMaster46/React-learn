export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {

    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string

}
export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
export type DialogType = {
    name: string
    id: number
}
export type MessageType = {
    id: number
    message: string
}