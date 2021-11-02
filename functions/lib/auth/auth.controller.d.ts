import { Request } from 'express';
import { AuthService } from '../service/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getIdentity(request: Request): Promise<{
        user: import("../common/user").User;
        tokenHash: string;
    }>;
    validateToken(payload: {
        hash: string;
    }, request: Request): Promise<string>;
}
