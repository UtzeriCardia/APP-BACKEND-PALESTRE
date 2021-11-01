import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private appService: AppService) {}

  @Get()
  main() {
    return 'Api Backend Palestre v.' + this.appService.getVersion();
  }
}
