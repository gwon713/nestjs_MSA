import { CustomConfigService } from '@libs/common/config/config.service';
import { RegisterBaseUserInput } from '@libs/common/input';
import { Output } from '@libs/common/model';
import { UtilService } from '@libs/common/util/util.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class UserProxyService {
  private readonly logger: Logger;
  constructor(
    private readonly configService: CustomConfigService,
    private readonly utilService: UtilService,
    @Inject('USER_SERVICE') private readonly client: ClientProxy,
  ) {
    this.logger = new Logger();
  }
  registerBaseUser(input: RegisterBaseUserInput): Observable<Output> {
    return this.client
      .send<Output, RegisterBaseUserInput>({ cmd: 'registerBaseUser' }, input)
      .pipe();
  }
}
