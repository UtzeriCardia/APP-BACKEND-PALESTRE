export class User {
    username: string;
    displayName?: string;
    role?: UserRole;
}

export enum UserRole {
    ADMIN,
    PALESTRA,
    CLIENTE
}