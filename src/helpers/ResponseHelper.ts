import { Response } from "express";

type SuccessResponse<T = any> = {
  success: true;
  statusCode: number;
  message: string;
  data?: T;
  meta?: Record<string, any>;
  error: null;
};

type ErrorResponse = {
  success: false;
  statusCode: number;
  message: string;
  data: null;
  error?: any;
  errors?: any[];
  code?: string;
};

export default class ResponseHelper {
  // Success response
  public static success<T>(
    res: Response,
    data: T,
    message = "Request successful",
    statusCode = 200,
    meta?: Record<string, any>
  ): Response {
    const response: SuccessResponse<T> = {
      success: true,
      statusCode,
      message,
      data,
      error: null,
      ...(meta && { meta }),
    };
    return res.status(statusCode).json(response);
  }

  // Error response
  public static error(
    res: Response,
    message = "Something went wrong",
    statusCode = 500,
    error?: any,
    errors?: any[],
    code?: string
  ): Response {
    const response: ErrorResponse = {
      success: false,
      statusCode,
      message,
      data: null,
      ...(error && { error }),
      ...(errors && { errors }),
      ...(code && { code }),
    };
    return res.status(statusCode).json(response);
  }

  // Specific error types for convenience
  public static badRequest(res: Response, message = "Bad request") {
    return this.error(res, message, 400, undefined, undefined, "BAD_REQUEST");
  }

  public static unauthorized(res: Response, message = "Unauthorized access") {
    return this.error(res, message, 401, undefined, undefined, "UNAUTHORIZED");
  }

  public static forbidden(res: Response, message = "Forbidden access") {
    return this.error(res, message, 403, undefined, undefined, "FORBIDDEN");
  }

  public static notFound(res: Response, message = "Resource not found") {
    return this.error(res, message, 404, undefined, undefined, "NOT_FOUND");
  }

  public static conflict(res: Response, message = "Conflict occurred") {
    return this.error(res, message, 409, undefined, undefined, "CONFLICT");
  }

  public static validationError(
    res: Response,
    errors: any[],
    message = "Validation failed"
  ) {
    return this.error(res, message, 422, undefined, errors, "VALIDATION_ERROR");
  }

  public static tooManyRequests(res: Response, message = "Too many requests") {
    return this.error(
      res,
      message,
      429,
      undefined,
      undefined,
      "TOO_MANY_REQUESTS"
    );
  }

  public static internalServerError(
    res: Response,
    message = "Internal server error",
    error?: any,
    code?: string
  ) {
    return this.error(res, message, 500, error, undefined, code);
  }

  public static serviceUnavailable(
    res: Response,
    message = "Service unavailable"
  ) {
    return this.error(
      res,
      message,
      503,
      undefined,
      undefined,
      "SERVICE_UNAVAILABLE"
    );
  }

  public static customError(
    res: Response,
    statusCode: number,
    message: string,
    error?: any,
    errors?: any[],
    code?: string
  ) {
    return this.error(res, message, statusCode, error, errors, code);
  }
}
