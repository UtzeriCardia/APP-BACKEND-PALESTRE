import { Module } from '@nestjs/common';
import { AdminController } from './api/admin/admin.controller';
import { AuthController } from './api/auth/auth.controller';
import { AppController } from './api/app.controller';
import { AppService } from './service/app.service';
import { AuthService } from './service/auth.service';
import { FirebaseService } from './service/firebase.service';
import { PalestraService } from './service/palestra.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController, AdminController],
  providers: [AppService, AuthService, FirebaseService, PalestraService],
})
export class AppModule {}
