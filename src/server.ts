import './main/config/module-alias'

import { env } from './main/config/env'
import app from '@/main/config/app'

app.listen(env.port, () => {
  console.log('App Started!!!')
})
