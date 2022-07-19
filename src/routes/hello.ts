import { Router } from 'express'
import { getHello } from '../controller/hello'

const route = Router()

route.route('/').get(getHello)

export default route
