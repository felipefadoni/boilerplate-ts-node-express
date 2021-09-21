import { dbConnection } from '@/infra/db'
import { UsersEntity } from '@/infra/db/entities/Users'

export const getAllUsersRepository = async (): Promise<UsersEntity[]> => {
  const db = await dbConnection.getInstance()

  return await db('users')
}
