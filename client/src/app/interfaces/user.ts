import { UserType } from "../services/shared/constants";

export interface IUser {
    email : string,
    password: string,
    username?: string,
    usertype?: UserType,
    token?: string
}