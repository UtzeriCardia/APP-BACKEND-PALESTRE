import { Request } from 'express';
import { PalestraService } from '../service/palestra.service';
import { RegistraPalestraPayload } from './admin.request';
export declare class AdminController {
    private palestraService;
    constructor(palestraService: PalestraService);
    registraPalestra(payload: RegistraPalestraPayload, request: Request): Promise<{
        key: any;
    }>;
}
