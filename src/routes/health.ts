import { getHello } from '@controller/hello'
import { Router } from 'express'

const health = Router()

health.route('/health').get(getHello)

export default health
