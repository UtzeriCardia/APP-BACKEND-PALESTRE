import { Injectable, Req } from '@nestjs/common';
import {default as config} from './config';

@Injectable()
export class AppService {

    getVersion()  {
        return config.VERSION;
    }
}
