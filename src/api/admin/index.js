import { instance } from "../axios"

export const adminRegister = (data)=>{
    try {
        return instance.post('/admin/register',data)
    } catch (error) {
        return error
    }
} 



export const adminLogin = (data)=>{
    try {
        return instance.post('/admin/login',data)
    } catch (error) {
        return error
    }
} 
