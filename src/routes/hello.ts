import { getHello } from '@controller/hello'
import { Router } from 'express'

const route = Router()

route.route('/').get(getHello)

export default route
