import { initializeApp } from "firebase/app";
import { Injectable } from "@nestjs/common";
import { Database, getDatabase, onValue, push, ref, set, update } from "firebase/database";
import { collection, doc, Firestore, getDocs, getFirestore, setDoc } from "firebase/firestore";
import {default as config} from '../config';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FirebaseService {

    database: Database;
    firestore: Firestore;

    constructor() {
        initializeApp(config.FIREBASE_CONFIG);
        this.database = getDatabase();
        this.firestore = getFirestore();
    }

    async read(path) {
        return new Promise((resolve) => {
            const dataRef = ref(this.database, path);
            onValue(dataRef, (snapshot) => resolve(snapshot.val()));
        });
    }

    async readDocs(docName: string, query?) {
        const docRef = collection(this.firestore, docName);
        const docs = await getDocs(docRef);
        let value = {};
        docs.forEach(doc => {
            value = {...value, ...{[doc.id]: doc.data()}};
        });
        return value;
    }

    insert(path: string, payload: object) {
        const key = push(ref(this.database, path)).key;
        update(ref(this.database, path), payload);
        return key;
    }

    async insertDoc(path: string, payload: object) {
        const key = uuid();
        await setDoc(doc(this.firestore, path, key), payload);
        return key;
    }

    update(path: string, payload: object) {
        update(ref(this.database, path), payload);
    }

    delete(path: string) {
        set(ref(this.database, path), null);
    }

}