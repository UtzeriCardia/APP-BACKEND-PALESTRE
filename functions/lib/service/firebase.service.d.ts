import { Database } from "firebase/database";
import { Firestore } from "firebase/firestore";
export declare class FirebaseService {
    database: Database;
    firestore: Firestore;
    constructor();
    read(path: any): Promise<unknown>;
    readDocs(docName: string, query?: any): Promise<{}>;
    insert(path: string, payload: object): string;
    insertDoc(path: string, payload: object): Promise<any>;
    update(path: string, payload: object): void;
    delete(path: string): void;
}
