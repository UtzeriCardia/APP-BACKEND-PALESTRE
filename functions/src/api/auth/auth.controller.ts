import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../../service/auth.service';

@Controller('/auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Get('/identity')
  getIdentity(@Req() request: Request) {
    return this.authService.getIdentityAndGenerateToken(<string>request.headers.firebase_user_id, 
        <string>request.headers.firebase_user_name);
  }

  @Post('/validateToken')
  validateToken(@Body() payload: {hash: string}, @Req() request: Request) {
    return this.authService.decodeToken(payload.hash, <string>request.headers.firebase_user_id);
  }
}