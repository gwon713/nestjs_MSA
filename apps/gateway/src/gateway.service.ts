import { CustomConfigService } from '@libs/common/config/config.service';
import { UtilService } from '@libs/common/util/util.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class GatewayService {
  private readonly logger: Logger;
  constructor(
    private readonly configService: CustomConfigService,
    private readonly utilService: UtilService,
    @Inject('AUTH_SERVICE') private readonly client: ClientProxy,
  ) {
    this.logger = new Logger('GatewayService');
  }
  getHello(): string {
    return 'Hello World!';
  }
  async getAuth(): Promise<any> {
    return this.client.send<string, string>({ cmd: 'helloAuth' }, 'hello');
  }
}
