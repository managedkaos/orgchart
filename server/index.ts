import express, {Application, Request, Response} from 'express'
import router from './api/index.js'

const app:Application = express()
const port:number = 30001

app.get('/', (request: Request, response: Response):void => {
    response.send('Sample data')
})

app.use('/api', (request:Request, response, next):void => {
    console.log(`${(new Date).toLocaleString()} [request]`, request.method, request.originalUrl)
    next()
})

app.use('/api', router)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})