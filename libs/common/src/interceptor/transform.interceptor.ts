import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadGatewayException,
  RequestTimeoutException,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
      map((data) => ({ data })),
      catchError((err) => {
        logger.error('interceptor');
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        throwError(() => new BadGatewayException(err));
      }),
    );
  }
}
