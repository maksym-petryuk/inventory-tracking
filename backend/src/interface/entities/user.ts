type role = "admin" | "user";

export interface IUser {
    id: string;
    userName: string;
    password: string;
    roles: role;
}

export type CreateUserDTO = Omit<IUser, "id" >

export type PublicUser = Omit<IUser, "password">
