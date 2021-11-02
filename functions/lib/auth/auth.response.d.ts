import { User } from "src/common/user";
export interface IdentityResponse {
    user: User;
    tokenHash: string;
}
