import { instance } from "../axios"

export const userRegister = (data)=>{
    try {
        return instance.post('/user/register',data)
    } catch (error) {
        return error
    }
} 



export const userLogin = (data)=>{
    try {
        return instance.post('/user/login',data)
    } catch (error) {
        return error
    }
} 
