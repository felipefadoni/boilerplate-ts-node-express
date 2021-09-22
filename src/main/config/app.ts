import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'

import { resolve } from 'path'
import { setupRoutes } from '@/app/routes'

const app = express()

app.use(
  morgan(
    '"IP :remote-addr" - ":method :url" "STATUS :status" ":referrer" :response-time ms',
    { skip: () => process.env.NODE_ENV === 'test' }
  )
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(compression())
app.use(cors())

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
