import express from 'express'
import { managerFactory } from '../models/manager.js'

const router = express.Router()

router.get('/', (request, response) => {
    response.send('/api base route')
})

router.get('/users', (request, response) => {
    response.send({body: managerFactory(5, 3)})
})

router.post('/users', (request, response) => {
    response.send('New user created')
})

export default router