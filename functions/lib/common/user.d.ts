export declare class User {
    username: string;
    displayName?: string;
    role?: UserRole;
    constructor(username?: string);
}
export declare enum UserRole {
    ADMIN = 0,
    PALESTRA = 1,
    CLIENTE = 2
}
