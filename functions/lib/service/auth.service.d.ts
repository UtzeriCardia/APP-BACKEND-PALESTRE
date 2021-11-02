import { User } from "../common/user";
export declare class AuthService {
    private readonly AES_256_CTR;
    generateToken(firebaseUserId: string, payload: object): Promise<string>;
    decodeToken(hash: string, firebaseUserId: string): Promise<string>;
    getIdentityAndGenerateToken(userId: string, username: string): Promise<{
        user: User;
        tokenHash: string;
    }>;
}
