import { IUser } from './user';

export interface IRegistration extends IUser {
    acadamy: string,
    name: string,
    address?: string
}
