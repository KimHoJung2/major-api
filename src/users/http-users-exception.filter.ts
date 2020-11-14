import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomError } from './dto/create-users.dto';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const customError = exception as CustomError;

    response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: customError.message,
      code: customError.code,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
