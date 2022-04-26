import logger from "../../core/logger";
import { ServerError } from "../../core/serverError";
import { Request, Response, NextFunction } from "express";

interface IService {
  data?: any;
  error?: string;
  status?: number;
  message?: string;
  meta?: any;
  file?: any;
}

const controller: any =
  (service: (req: Request, res?: Response) => Promise<IService>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { error, status, message, data, meta, file } = await service(
      req,
      res
    );
    if (file) return;
    if (error || status) return next(new ServerError(error, status, data));

    return res.json({
      message: message,
      data,
      meta,
    });
  };

export { controller };
