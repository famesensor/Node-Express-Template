import { NextFunction, Request, Response } from 'express'

type FnType = (req: Request, res: Response, next: NextFunction) => void

const asyncHandler =
    (fn: FnType) =>
    (req: Request, res: Response, next: NextFunction): void => {
        Promise.resolve(fn(req, res, next)).catch(next)
    }

export default asyncHandler
