import './config/module-alias'

import { env } from './config/env'
import app from './config/app'
import { logger } from './config/logger'

app.listen(env.port, () => {
  logger.info(`SERVER IS ONLINE: http://localhost:${env.port}`)
})
