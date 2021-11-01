import { Module } from '@nestjs/common';
import { AuthController } from './api/auth/auth.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './service/auth.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
