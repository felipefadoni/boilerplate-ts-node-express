import { resolve } from 'path'
import dotenv from 'dotenv'

const nodeEnv = process.env.NODE_ENV != null ? process.env.NODE_ENV : 'development'

const getEnv = (): string => {
  switch (nodeEnv) {
    case 'test':
      return resolve(__dirname, '..', '..', '..', '.env-test')

    case 'development':
      return resolve(__dirname, '..', '..', '..', '.env')

    default:
      return resolve(__dirname, '..', '..', '..', '.env')
  }
}

dotenv.config({
  path: getEnv()
})

const sslConfig = /(test|development)/i.test(nodeEnv ?? '')
  ? false
  : {
      rejectUnauthorized: false,
      requestCert: true
    }

const {
  PORT,
  NODE_ENV,
  ORIGIN,
  DATABASE_URL,
  DATABASE_CLIENT,
  DATABASE_POOL_MIN,
  DATABASE_POOL_MAX
} = process.env

export const env = {
  port: PORT ?? '8080',
  nodeEnv: NODE_ENV ?? 'development',
  sslConfig,
  origin: ORIGIN ?? 'http://localhost:3000',
  databaseUrl: DATABASE_URL ?? 'postgres://boilerplate:boilerplate@localhost:5432/boilerplate',
  clientType: DATABASE_CLIENT as string,
  databasePoolMin: parseFloat(DATABASE_POOL_MIN as string),
  databasePoolMax: parseFloat(DATABASE_POOL_MAX as string)
}
