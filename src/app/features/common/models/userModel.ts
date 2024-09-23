export interface UserModel {
    username: string;
    role: string;
    isAdmin: boolean;
    permissions: string[];
}