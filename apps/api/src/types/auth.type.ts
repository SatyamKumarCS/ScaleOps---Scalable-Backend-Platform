export interface RegisterInput {
    email: string;
    password: string
}

export interface LoginInput{
    email: string;
    password: string
}

export interface AuthPayload{
    userID: string
}