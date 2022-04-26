import logger from "../../core/logger";
import { ServerError } from "../../core/serverError";
import { Request, Response, NextFunction } from "express";

interface IService {
  data?: any;
  error?: string;
  status?: number;
  message?: string;
  meta?: any;
  y;
}

const controller: any =
  (service: (req: Request, res?: Response) => Promise<IService>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { error, status, message, data, meta } = await service(req, res);
    if (error || status) return next(new ServerError(error, status, data));

    return res.json({
      message: message,
      data,
      meta,
    });
  };

export { controller };
