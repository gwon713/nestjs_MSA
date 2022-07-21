import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CustomException } from '../exception';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const logger: Logger = new Logger('TransformInterceptor');
    return next.handle().pipe(
      catchError((err) => {
        logger.error('interceptor');
        logger.error(err);
        logger.error(err instanceof RpcException);
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException(err));
        }
        if (err instanceof RpcException) {
          return throwError(() => new RpcException(err));
        }
        return throwError(() => new CustomException(err));
      }),
    );
  }
}
