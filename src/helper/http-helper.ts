import { Response } from 'express'

interface BadRequestProps {
  response: Response
  body?: any
  status?: number
  vars?: {
    query?: any
    params?: any
    body?: any
  }
}

export const httpResponse = ({ body, response, status = 400, vars }: BadRequestProps): Response => {
  return response.status(status).json({
    statusCode: status,
    body,
    vars
  })
}
