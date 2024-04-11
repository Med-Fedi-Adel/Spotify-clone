import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevCConfigService';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG') private config: { port: string },
  ) {
    console.log('CONFIG', config);
  }
  getHello(): string {
    return `Hello Im learning nest js fundamentals ${this.devConfigService.getDBHOST()} PORT : ${this.config.port}`;
  }
}
