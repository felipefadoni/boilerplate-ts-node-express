import { env } from './src/main/config/env'

export default {
  client: env.clientType,
  connection: {
    connectionString: env.databaseUrl,
    ssl: env.sslConfig
  },
  pool: {
    min: env.databasePoolMin,
    max: env.databasePoolMax
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/infra/db/migrations'
  },
  seeds: {
    directory: './src/infra/db/seeds',
    timestampFilenamePrefix: true
  }
}
