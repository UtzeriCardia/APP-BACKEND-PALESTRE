export class User {
    username: string;
    displayName?: string;
    role?: UserRole;

    constructor(username?: string) {
        this.username = username;
    }
}

export enum UserRole {
    ADMIN,
    PALESTRA,
    CLIENTE
}