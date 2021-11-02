import { Injectable } from "@nestjs/common";
import { createCipheriv, createDecipheriv, randomBytes } from "crypto";
import { User, UserRole } from "../common/user";
import {default as config} from '../config';

@Injectable()
export class AuthService {

  private readonly AES_256_CTR = 'aes-256-ctr';


  async generateToken(firebaseUserId: string, payload: object) {

    const iv = randomBytes(16);
    const cipher = createCipheriv(this.AES_256_CTR, firebaseUserId, iv);
    const encrypted = Buffer.concat([
      cipher.update(JSON.stringify(payload)), 
      cipher.final()
    ]);
    return iv.toString('hex') + encrypted.toString('hex');
  }


  async decodeToken(hash: string, firebaseUserId: string) {

    const decipher = createDecipheriv(this.AES_256_CTR, firebaseUserId, Buffer.from(hash.substring(0, 32), 'hex'));
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(hash.substring(32), 'hex')), 
      decipher.final()
    ]);
    return decrypted.toString();
  }

  /**
   * Il flusso di autenticazione è:
   * 
   * - Firebase Authenticator tramite username e password -> ottengo user id
   * - Retrieve dei dati anagrafici su database tramite user id
   * - Generazione del token: cript delle informazioni sul ruolo e relative funzionalità
   */
  async getIdentityAndGenerateToken(userId: string, username: string) {

    const tokenExpires = new Date();
    tokenExpires.setTime(tokenExpires.getTime() + (24*60*60*1000));
    const tokenPayload = {
      expires: tokenExpires
    };
    const user = new User(username);
    // Se sono amministratore imposto il ruolo e procedo a restituire il token
    if (config.ADMIN_KEYS.includes(userId)) {
      user.role = UserRole.ADMIN;
    } else {
      // TODO LETTURA DAL DATABASE PER RECUPERARE I DATI ANAGRAFICI DI PALESTRA | CLIENTE
      user.role = UserRole.CLIENTE;
    }
    return {
      user: user,
      tokenHash: await this.generateToken(userId, tokenPayload)
    }
  }

}