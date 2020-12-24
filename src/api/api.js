import * as axios from "axios";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': '45efece1-dd99-402c-96fc-131533cf1429'
        }
    }
)
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(
                response => {
                    return response.data
                }
            )
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data.resultCode
            })
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data.resultCode
            })
    },
    getProfile(id) {
console.warn('Obsolete method. Please use profileAPI object')
       return profileAPI.getProfile(id)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },

    login(email,password,rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },

    logout() {
        return instance.delete('auth/login')
    }
}




export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)

    },

    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },

    updateStatus(status) {
        return instance.put('profile/status',{status: status})
    },

    savePhoto(file) {
        const formData = new FormData();
        formData.append("image", file)
        return instance.put('profile/photo',formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
    }

}


