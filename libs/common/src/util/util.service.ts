import { Injectable } from '@nestjs/common';

import { CustomConfigService } from '../config/config.service';

@Injectable()
export class UtilService {
  constructor(private readonly config: CustomConfigService) {}
}
