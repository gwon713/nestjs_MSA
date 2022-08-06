import { CustomConfigService } from '@libs/common/config/config.service';
import { AuthenticateInput, RegisterBaseUserInput } from '@libs/common/input';
import { AuthenticateOutput, Output } from '@libs/common/model';
import { UtilService } from '@libs/common/util/util.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AuthProxyService {
  private readonly logger: Logger;
  constructor(
    private readonly configService: CustomConfigService,
    private readonly utilService: UtilService,
    @Inject('AUTH_SERVICE') private readonly client: ClientProxy,
  ) {
    this.logger = new Logger();
  }
  healthCheck(): Observable<string> {
    return this.client
      .send<string, string>({ cmd: 'healthCheck' }, 'healthy')
      .pipe();
  }

  authenticate(input: AuthenticateInput): Observable<AuthenticateOutput> {
    return this.client
      .send<AuthenticateOutput, AuthenticateInput>(
        { cmd: 'authenticate' },
        input,
      )
      .pipe();
  }

  registerBaseUser(input: RegisterBaseUserInput): Observable<Output> {
    return this.client
      .send<Output, RegisterBaseUserInput>({ cmd: 'registerBaseUser' }, input)
      .pipe();
  }
}
