import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { PalestraService } from '../../service/palestra.service';
import { RegistraPalestraPayload } from './admin.request';

@Controller('/admin')
export class AdminController {

  constructor(private palestraService: PalestraService) {}

  @Post('/registraPalestra')
  registraPalestra(@Body() payload: RegistraPalestraPayload, @Req() request: Request) {
    return this.palestraService.insert(payload);
  }
}