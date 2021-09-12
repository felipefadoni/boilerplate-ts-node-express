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

const {
  PORT,
  NODE_ENV
} = process.env

export const env = {
  port: PORT || '8080',
  nodeEnv: NODE_ENV || 'development'
}
