import { HttpException, Logger } from '@nestjs/common';

import { CustomStatusCode } from '../constant';
import { Output } from '../model';

/**
 * CustomException
 */
export class CustomException extends HttpException {
  errorMessage?: string | null;

  constructor(
    public customCode: CustomStatusCode,
    public statusCode: number = 7829,
    errorMessage?: string | null,
  ) {
    super(customCode, statusCode);
    this.errorMessage = errorMessage;
  }

  /**
   * processException
   */
  static processException(error: any): Output {
    Logger.debug(error.stack);
    if (error instanceof CustomException) {
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
