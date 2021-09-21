import { Request, Response } from 'express'
import { httpResponse } from '@/helper/http-helper'
import { getAllUsersService } from '@/domain/users/services/get-all'

export const getUserController = async (_request: Request, response: Response): Promise<Response> => {
  try {
    const users = await getAllUsersService()

    return httpResponse({
      body: {
        message: 'List users',
        rows: users,
        total: users.length
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
