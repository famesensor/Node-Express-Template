import express from 'express'

const app = express(),
    port = 3000

    

app.get('/', (req, res, next) => {
    console.log(`has a request!`)
    res.status(200).json({ status: 'success' })
})

app.listen(port, () => {
    console.log(`server running on port -> ${port}`)
})

