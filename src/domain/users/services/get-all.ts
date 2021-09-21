import { getAllUsersRepository } from '@/domain/users/repositories'
import { UsersEntity } from '@/infra/db/entities/Users'

export const getAllUsersService = async (): Promise<UsersEntity[]> => {
  return await getAllUsersRepository()
}
