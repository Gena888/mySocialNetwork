import * as axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9612377a-0b39-4432-abc2-9856cf3bb343'
    }
}
);



export const API = {
    unfollowUser(id) {
        return instanse.delete(`follow/${id}`)
            .then(response => response.data)
    },


    followUser(id) {
        return instanse.post(`follow/${id}`, {})
            .then(response => response.data)
    },

    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize} `)
            .then(response => response.data)
    },

    getUsers2(pageNumber, pageSize) {
        return instanse.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },

    authMe() {
        return instanse.get('auth/me')
        .then(response => response.data)

    },

    getProfileData(profileId) {
        return instanse.get('profile/' + profileId)
            .then(response => response.data)

    }









}