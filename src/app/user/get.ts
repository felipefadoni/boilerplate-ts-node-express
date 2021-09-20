import { httpResponse } from '@/helper/http-helper'
import { Request, Response } from 'express'

export const getUserController = (_request: Request, response: Response): Response => {
  try {
    return httpResponse({
      body: {
        message: 'List users',
        rows: {},
        total: 0
      },
      response,
      status: 200
    })
  } catch (error: any) {
    const statusCode = error.statusCode ? error.statusCode : error.status ? error.status : 500
    return httpResponse({
      body: error,
      response,
      status: statusCode
    })
  }
}
