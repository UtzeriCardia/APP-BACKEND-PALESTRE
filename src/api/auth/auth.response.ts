import { User } from "src/model/user";

export interface IdentityResponse {
    user: User;
    tokenHash: string;
}