import knex, { Knex } from 'knex'
import { env } from '@/main/config/env'

interface ConnectProps {
  uri: string
  clientType: string
  poolMin: number
  poolMax: number
}

export const dbConnection = {
  client: null as unknown as Knex,
  uri: null as unknown as string,
  clientType: null as unknown as string,
  poolMin: null as unknown as number,
  poolMax: null as unknown as number,

  connect ({ uri, clientType, poolMin, poolMax }: ConnectProps): void {
    this.uri = uri
    this.clientType = uri
    this.poolMin = poolMin
    this.poolMax = poolMax

    this.client = knex({
      client: clientType,
      connection: {
        connectionString: uri,
        ssl: env.sslConfig
      },
      pool: {
        min: poolMin,
        max: poolMax
      }
    })
  },

  disconnect (): void {
    this.client = null as unknown as Knex
  },

  async getInstance (): Promise<Knex> {
    try {
      if (this.client !== null) return this.client

      this.connect({
        uri: env.databaseUrl,
        clientType: env.clientType,
        poolMin: env.databasePoolMin,
        poolMax: env.databasePoolMax
      })

      return this.client
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
