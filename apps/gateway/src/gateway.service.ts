import { CustomConfigService } from '@libs/common/config/config.service';
import { UtilService } from '@libs/common/util/util.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GatewayService {
  private readonly logger: Logger;
  constructor(
    private readonly configService: CustomConfigService,
    private readonly utilService: UtilService,
  ) {
    this.logger = new Logger('GatewayService');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
