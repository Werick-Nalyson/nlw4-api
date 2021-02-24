import "reflect-metadata"
import Connection from './typeorm'

import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

Connection.create().catch(err => console.log(err))

export default app 