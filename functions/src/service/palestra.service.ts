import { Injectable } from "@nestjs/common";
import { RegistraPalestraPayload } from "src/api/admin/admin.request";
import { FirebaseService } from "./firebase.service";

@Injectable()
export class PalestraService {

    constructor(private firebase: FirebaseService) {}

    async insert(payload: RegistraPalestraPayload) {
        const key = await this.firebase.insertDoc('palestre', {
            userId: payload.userId,
            name: payload.name,
            dateCreated: new Date()
        });
        return {key};
    }
}