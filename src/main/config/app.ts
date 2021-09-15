import express from 'express'
import { resolve } from 'path'
import { setupRoutes } from '@/app/routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (request, response) => {
  const { version, license } = await import(
    resolve(__dirname, '..', '..', '..', 'package.json')
  )
  return response.status(200).json({
    message: 'Server is online',
    version,
    license
  })
})

setupRoutes(app)

export { app }
