import { CustomConfigService } from '@libs/common/config/config.service';
import { AuthenticateInput, RegisterUserInput } from '@libs/common/input';
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
  getAuth(): Observable<any> {
    return this.client.send<any, any>({ cmd: 'helloAuth' }, 'hello').pipe();
  }

  authenticate(input: AuthenticateInput): Observable<AuthenticateOutput> {
    return this.client
      .send<AuthenticateOutput, AuthenticateInput>(
        { cmd: 'authenticate' },
        input,
      )
      .pipe();
  }

  registerUser(input: RegisterUserInput): Observable<Output> {
    return this.client
      .send<Output, RegisterUserInput>({ cmd: 'registerUser' }, input)
      .pipe();
  }
}
