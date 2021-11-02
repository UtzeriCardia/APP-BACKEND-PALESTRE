import { RegistraPalestraPayload } from "src/admin/admin.request";
import { FirebaseService } from "./firebase.service";
export declare class PalestraService {
    private firebase;
    constructor(firebase: FirebaseService);
    insert(payload: RegistraPalestraPayload): Promise<{
        key: any;
    }>;
}
