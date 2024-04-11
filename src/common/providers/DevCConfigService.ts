import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
  private DBHOST = 'localhost';
  getDBHOST() {
    return this.DBHOST;
  }
}
