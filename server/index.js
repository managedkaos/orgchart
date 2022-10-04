import express from 'express'
import router from './api/index.js'

const app = express()
const port = 30001

app.get('/', (request, response) => {
    response.send('Sample data')
})

app.use('/api', (request, response, next) => {
    console.log(`${(new Date).toLocaleString()} [request]`, request.method, request.originalUrl)
    next()
})

app.use('/api', router)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})