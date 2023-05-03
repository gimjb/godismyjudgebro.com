import express from 'express'

import landing from './routes/landing'

/** The port on which the server listens. */
const port = 5409

/** The express app. */
const app = express()

app.use('/', landing)

app.listen(5409, () => {
  console.log(`Server listening on port ${port}`)
})
