import './config/module-alias'

import { env } from '@/main/config/env'

import { logger } from '@/main/config/logger'
import { dbConnection } from '@/infra/db/helpers'

dbConnection
  .getInstance()
  .then(async () => {
    const { app } = await import('@/main/config/app')
    app.listen(env.port, () =>
      logger.info(`Server running at http://localhost:${env.port}`)
    )
  })
  .catch(logger.error)
