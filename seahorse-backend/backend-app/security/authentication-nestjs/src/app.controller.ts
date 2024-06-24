import { Controller, Get, Inject } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { AppService } from './app.service';

@Controller()
export class AppController {

    constructor(private appService: AppService) { }

    getHello() {
        return this.appService.getHello()
    }
}
