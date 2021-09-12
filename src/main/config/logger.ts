import bunyan from 'bunyan'
import bunyanFormat from 'bunyan-format'
import { env } from './env'

const logger = bunyan.createLogger({
  name: 'BOILERPLATE-API - v1 //',
  streams: [
    {
      stream: bunyanFormat({ outputMode: 'long' })
    }
  ]
})

if (env.nodeEnv === 'test') {
  const fatalPlus = parseFloat(bunyan.FATAL.toString()) + 1
  logger.level(fatalPlus)
}

export { logger }
