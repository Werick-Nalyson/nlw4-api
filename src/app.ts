import "reflect-metadata"
import Connection from './typeorm'

import express from 'express'
const app = express()

Connection.create().catch(err => console.log(err))

export default app 