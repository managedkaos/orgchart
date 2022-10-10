import express from 'express'
import Users from './Users/manager.js'

const router = express.Router()

router.get('/', (request, response) => {
    response.send('/api base route')
})

router.get('/users', (request, response) => {
    response.send({body: Users})
})

router.post('/users', (request, response) => {
    response.send('New user created')
})

export default router