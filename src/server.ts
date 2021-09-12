import './main/config/module-alias'

import { env } from './main/config/env'
import app from './main/config/app'
import { logger } from './main/config/logger'

app.listen(env.port, () => {
  logger.info(`SERVER IS ONLINE: http://localhost:${env.port}`)
})
