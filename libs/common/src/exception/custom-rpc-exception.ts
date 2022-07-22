import { Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { CustomStatusCode } from '../constant';
import { Output } from '../model';

/**
 * CustomRpcException
 */
export class CustomRpcException extends RpcException {
  private readonly logger: Logger;
  errorMessage?: string | null;

  constructor(
    public customCode: CustomStatusCode,
    errorMessage?: string | null,
  ) {
    super(customCode);
    this.errorMessage = errorMessage;
    this.logger = new Logger('CustomRpcException');
  }

  /**
   * processException
   */
  static processException(error: any): Output {
    Logger.debug(error.stack);
    if (error instanceof CustomRpcException) {
      return {
        statusCode: <CustomStatusCode>error.message,
        errorMessage: error.errorMessage,
      } as Output;
    } else {
      return {
        statusCode: CustomStatusCode.ERROR,
        errorMessage: error.message,
      } as Output;
    }
  }
}
