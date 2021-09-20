import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()

  const rootDir = join(__dirname, '.')

  const ext = process.env.NODE_ENV === 'production' ? '.js' : '.ts'

  readdirSync(rootDir, {
    withFileTypes: true
  })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .map(async (dir) => {
      (await import(`${rootDir}/${dir}/router${ext}`)).default(router)
    })

  app.use('/', router)
}
