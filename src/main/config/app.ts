import express from 'express'
import { resolve } from 'path'

const app = express()

app.use('/', async (request, response) => {
  const { version, license } = await import(
    resolve(__dirname, '..', '..', '..', 'package.json')
  )

  return response.status(200).json({
    message: 'Server is online',
    version,
    license
  })
})

export { app }
