import {Controller, Get, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import JwtAuthenticationGuard from "./auth/jwt-authentication.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
