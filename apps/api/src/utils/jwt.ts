import jwt, { SignOptions } from 'jsonwebtoken';
import { AuthPayload } from '../types/auth.type.js';
import {ENV} from '../config/env.config.js';

export const signToken = (payload: AuthPayload) =>{
    const options: SignOptions = { expiresIn: ENV.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'] };
    return jwt.sign(payload as object, ENV.JWT_SECRET, options);
}

export const verifyToken = (token: string)=>{
    return jwt.verify(token,ENV.JWT_SECRET) as AuthPayload;
}