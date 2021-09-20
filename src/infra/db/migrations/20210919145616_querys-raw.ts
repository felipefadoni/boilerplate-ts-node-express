import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema.raw('DROP EXTENSION IF NOT EXISTS "uuid-ossp";')
}
