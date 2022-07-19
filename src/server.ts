import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
import express from 'express'
import { helloRoute } from './routes'

const app = express(),
    port = process.env.APP_PORT || 3000

// allow cors
app.use(cors())

// parse application/json
app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use('/hello', helloRoute)

app.get('/', (_req, res) => {
    res.status(200).json({ status: 'success' })
})

app.listen(port, () => {
    console.log(`server running on port -> ${port}`)
})
