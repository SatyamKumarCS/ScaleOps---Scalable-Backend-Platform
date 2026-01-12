import bcrypt from 'bcrypt';
import { signToken } from '../utils/jwt.js';

export const registerUser=async(email: string, password: string)=>{
    const hashedPassword=await bcrypt.hash(password,10)
    const user={id: "Temp_ID",email}
    const token=signToken({userID:user.id})
    return {user,token}
}

export const loginUser=async(email: string, password: string)=>{
    const isValid= true
    if(!isValid){
        throw new Error('Invalid credentials');
    }
    const token = signToken({ userID: "Temp_ID" })
    return {token}
}
