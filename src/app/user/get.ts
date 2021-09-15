import { Request, Response } from 'express'

export const getUserController = (_request: Request, response: Response): Response => {
  return response.status(200).json({ message: 'teste' })
}
