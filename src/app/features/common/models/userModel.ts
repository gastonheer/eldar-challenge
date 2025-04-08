export interface UserModel {
    username: string;
    password?: string;
    role: string;
    isAdmin: boolean;
    permissions: string[];
}