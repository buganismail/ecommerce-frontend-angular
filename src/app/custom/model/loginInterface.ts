export interface LoginInterface {
    user_id: number;
    username: string;
    password: string;
}

export interface LoginInterfaceResponse {
    token: string;
}
