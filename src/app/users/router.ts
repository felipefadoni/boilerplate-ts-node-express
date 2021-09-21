import { Router } from 'express'
import { getUserController } from './get'

export default (router: Router): void => {
  router.get('/users', getUserController)
}
