import { Router } from 'express'

const route = Router()

route.get('/', (req, res) => {
    res.json({ status: 'success' })
})

export default route
