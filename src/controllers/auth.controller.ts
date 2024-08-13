import { Request, Response } from 'express';
import { AuthService } from '../services';
import { logger } from '../utils';
import { HTTPSTATUS } from '../common/enums';
import { cbError, cb } from '../common/handler';
import { ERRORS } from '../common/constants';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = AuthService.getInstance();
  }

  login = async (req: Request, res: Response) => {
    logger.info('AuthController - login()');

    try {
      const email = req?.body?.email as string;
      const password = req?.body?.password as string;
      const response = await this.authService.login(email);

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };
}
