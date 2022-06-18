import express from 'express'
import cors from 'cors'

const app = express(),
    port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({ status: 'success' })
})

app.listen(port, () => {
    console.log(`server running on port -> ${port}`)
})
